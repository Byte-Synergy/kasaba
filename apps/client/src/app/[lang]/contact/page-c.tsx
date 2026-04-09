"use client";

import { Map as ContactMap, Methods } from "@/components/root/contact";
import Select from "@/components/root/contact/select";
import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import { useContactStore } from "@/store/contact-store";
import { Option } from "@/types";
import { useState } from "react";
import { submitAppeal } from "@/action/appeal";

const ContactPageClient = ({
  main_label,
  contact_with_us_label,
  name_label,
  mail_content,
  phone_number_label,
  email_label,
  helpline_phone_number,
  select_application_type_label,
  reception_number,
  request_label,
  question_or_offer_label,
  contact_options,
  send_label,
  enter_question_or_offer_placeholder,
  enter_first_and_last_name_placeholder,
  contact_label,
  enter_phone_number_placeholder,
}: {
  contact_options: string[];
  email_label: string;
  helpline_phone_number: string;
  select_application_type_label: string;
  reception_number: string;
  mail_content: string;
  enter_phone_number_placeholder: string;
  enter_first_and_last_name_placeholder: string;
  enter_question_or_offer_placeholder: string;
  main_label: string;
  contact_with_us_label: string;
  name_label: string;
  phone_number_label: string;
  request_label: string;
  question_or_offer_label: string;
  send_label: string;
  contact_label: string;
}) => {
  const {
    data: { name, phoneNumber, answers, appeal },
    setData,
    clearData,
  } = useContactStore((state) => state);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async () => {
    if (!name || !phoneNumber || !appeal) {
      setFeedback({ type: "error", message: "Barcha maydonlarni to'ldiring." });
      return;
    }

    setLoading(true);
    setFeedback(null);

    // Map appeal label to internal type
    const appealTypeIndex = contact_options.indexOf(appeal);
    const typeMapping: ("question" | "offer" | "appeal")[] = ["question", "offer", "appeal"];
    const type = appealTypeIndex !== -1 ? typeMapping[appealTypeIndex] : ("appeal" as any);

    const result = await submitAppeal({
      full_name: name,
      phone_number: phoneNumber,
      type: type,
      message: answers,
    });

    setLoading(false);

    if (result.success) {
      setFeedback({ type: "success", message: "Murojaatingiz muvaffaqiyatli yuborildi." });
      clearData();
    } else {
      setFeedback({ type: "error", message: "Xatolik yuz berdi. Keyinroq qayta urinib ko'ring." });
    }
  };

  return (
    <div className=" bg-zinc-50">
      <Container className="pt-5 max-md:hidden">
        <Breadcrumb main_label={main_label} data={[contact_label]} />
      </Container>
      <Container className=" grid grid-cols-2 gap-6 py-10 max-md:grid-cols-1">
        <div className=" border bg-white max-md:border-none max-md:bg-transparent">
          <h2 className=" font-bold text-2xl text-[#FF8500] py-5 px-6 bg-zinc-100 border-b max-md:border-none max-md:bg-transparent uppercase max-md:p-0 max-md:pb-4">
            {contact_with_us_label}
          </h2>
          <div className="grid grid-cols-2 gap-6 p-6 max-md:p-0">
            <div className=" col-span-2">
              <label
                htmlFor="name"
                className=" font-raleway text-base font-medium mb-2"
              >
                {name_label}
              </label>
              <input
                id="name"
                type={"text"}
                placeholder={enter_first_and_last_name_placeholder}
                value={name}
                onChange={(e) => setData("name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 bg-zinc-100 font-medium text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className=" max-md:col-span-2 ">
              <label
                htmlFor="phoneNumber"
                className=" font-raleway text-base font-medium mb-2"
              >
                {phone_number_label}
              </label>
              <input
                id="phoneNumber"
                type={"text"}
                placeholder={enter_phone_number_placeholder}
                value={phoneNumber}
                onChange={(e) => setData("phoneNumber", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 bg-zinc-100 font-medium text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className=" max-md:col-span-2">
              <label
                htmlFor="appeal"
                className=" font-raleway text-base font-medium mb-2"
              >
                {request_label}
              </label>
              <Select
                select_application_type_label={select_application_type_label}
                id={"appeal"}
                options={contact_options.map((c, k) => ({
                  id: k,
                  name: c,
                  value: c,
                }))}
                selected={contact_options.find((item) => item === appeal)}
                onChange={(option: Option) => setData("appeal", option.value)}
              />
            </div>
            {/* <div className=" col-span-2">
              <label
                htmlFor="email"
                className=" font-raleway text-base font-medium mb-2"
              >
                Elektron pochta
              </label>
              <input
                id="email"
                type={"email"}
                placeholder={"Elektron pochtangizni kiriting"}
                value={email}
                onChange={(e) => setData("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 bg-zinc-100 font-medium text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div> */}
            <div className=" col-span-2">
              <label
                htmlFor="questions"
                className=" font-raleway text-base font-medium mb-2"
              >
                {question_or_offer_label}
              </label>
              <textarea
                id="questions"
                placeholder={enter_question_or_offer_placeholder}
                value={answers}
                rows={5}
                onChange={(e) => setData("answers", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 bg-zinc-100 font-medium text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <div className=" col-span-2 flex flex-col gap-4">
              <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-5">
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleSubmit}
                  className=" py-3 px-12 bg-orange-500 font-semibold text-sm disabled:bg-zinc-500 text-white cursor-pointer"
                >
                  {loading ? "Yuborilmoqda..." : send_label}
                </button>
              </div>
              {feedback && (
                <div className={`p-3 text-sm font-medium ${feedback.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {feedback.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ContactMap />
          <Methods
            email_label={email_label}
            helpline_phone_number={helpline_phone_number}
            reception_number={reception_number}
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactPageClient;
