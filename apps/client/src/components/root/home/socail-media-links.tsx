import { Locale } from "@/configs/i18n";
import { socialsData } from "@/data/social";
import { getDictionary } from "@/utils/directory";
import React from "react";
import SocailMediaLinksClient from "./socail-media-links-client";

const SocailMediaLinks = async ({ lang }: { lang: Locale }) => {
  const t = await getDictionary(lang);

  return (
    <SocailMediaLinksClient
      follow_label={t.follow_label}
      lang={lang}
      data={[
        {
          title: t.social_networks.telegram.title,
          description: t.social_networks.telegram.description,
          url: socialsData.telegram.url,
          username: socialsData.telegram.username,
        },
        {
          title: t.social_networks.facebook.title,
          description: t.social_networks.facebook.description,
          url: socialsData.facebook.url,
          username: socialsData.facebook.username,
        },
        {
          title: t.social_networks.x.title,
          description: t.social_networks.x.description,
          url: socialsData.x.url,
          username: socialsData.x.username,
        },
        {
          title: t.social_networks.youtube.title,
          description: t.social_networks.youtube.description,
          url: socialsData.youtube.url,
          username: socialsData.youtube.username,
        },
        {
          title: t.social_networks.instagram.title,
          description: t.social_networks.instagram.description,
          url: socialsData.instagram.url,
          username: socialsData.instagram.username,
        },
      ]}
    />
  );
};

export default SocailMediaLinks;
