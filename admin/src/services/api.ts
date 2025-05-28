import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { JwtService } from "@/services/jwt";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

class ApiService {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });
  private static mode: "server" | "client" = "server";

  public static init(mode: "server" | "client" = "server") {
    this.mode = mode;
    this.handleResponseError();
    this.setHeader();
  }

  private static navigate(url: string) {
    if (this.mode === "client") {
      const router = useRouter();
      router.push(url);
    } else {
      redirect(url);
    }
  }

  public static async refreshToken() {
    const refresh = JwtService.getRefresh();
    if (!refresh) {
      JwtService.destroyAccess();
      this.navigate("/auth");
      return;
    }

    try {
      const { data } = await this.axiosInstance.post<{ access: string }>(
        "auth/refresh",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Refresh ${refresh}`,
          },
        },
      );
      JwtService.saveToken(data.access);
      this.setHeader();
      return data.access;
    } catch (error) {
      this.unsetHeader();
      localStorage.removeItem("refresh");
      localStorage.removeItem("id_token");
      JwtService.destroyAccess();
      JwtService.destroyRefresh();
      this.navigate("/auth");
      throw error;
    }
  }

  private static handleResponseError() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const errorResponse = error?.response;
        const originalRequest = error?.config;

        if (errorResponse?.status === 401) {
          if (originalRequest?.url?.includes("auth/refresh")) {
            JwtService.destroyAccess();
            JwtService.destroyRefresh();
            this.navigate("/auth");
            return;
          }

          const newToken = await this.refreshToken();
          if (newToken && originalRequest?.headers) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return this.axiosInstance(originalRequest);
          } else {
            return Promise.reject(error);
          }
        }

        if (errorResponse?.status === 404) {
          this.navigate("/404");
        }

        return Promise.reject(error);
      },
    );
  }

  public static setHeader(): void {
    this.axiosInstance.defaults.headers.common["Authorization"] =
      JwtService.getToken() ? `Bearer ${JwtService.getToken()}` : undefined;
    this.axiosInstance.defaults.headers.common["Accept-Language"] =
      localStorage.getItem("locale") || "ru";
    this.axiosInstance.defaults.headers.common["Content-Type"] =
      "application/json";
  }

  public static unsetHeader(): void {
    this.axiosInstance.defaults.headers.common["Authorization"] = "";
  }

  public static query<T>(
    resource: string,
    params?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(resource, { ...params });
  }

  public static get<R = any>(
    resource: string,
    slug = "",
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.get(`${resource}/${slug}`, {
      headers: { "ngrok-skip-browser-warning": "true" },
    });
  }

  public static post<T = any, R = any>(
    resource: string,
    data?: T,
    params?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.post(resource, data, { ...params });
  }

  public static update<T = any, R = any>(
    resource: string,
    slug: string,
    data?: T,
    params?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.put(`${resource}/${slug}`, data, { ...params });
  }

  public static put<T = any, R = any>(
    resource: string,
    data?: T,
    params?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.put(resource, data, { ...params });
  }

  public static patch<T = any, R = any>(
    resource: string,
    data?: T,
    params?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.patch(resource, data, { ...params });
  }

  public static delete<T = any>(
    resource: string,
    params?: T,
  ): Promise<AxiosResponse> {
    return this.axiosInstance.delete(resource, { params });
  }
}

export default ApiService;
