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
          media: t.social_networks.telegram.media,
          url: socialsData.telegram.url,
          username: socialsData.telegram.username,
        },
        {
          title: t.social_networks.facebook.title,
          description: t.social_networks.facebook.description,
          media: t.social_networks.facebook.media,
          url: socialsData.facebook.url,
          username: socialsData.facebook.username,
        },
        {
          title: t.social_networks.x.title,
          description: t.social_networks.x.description,
          media: t.social_networks.x.media,
          url: socialsData.x.url,
          username: socialsData.x.username,
        },
        {
          title: t.social_networks.youtube.title,
          description: t.social_networks.youtube.description,
          media: t.social_networks.youtube.media,
          url: socialsData.youtube.url,
          username: socialsData.youtube.username,
        },
        {
          title: t.social_networks.instagram.title,
          description: t.social_networks.instagram.description,
          media: t.social_networks.instagram.media,
          url: socialsData.instagram.url,
          username: socialsData.instagram.username,
        },
      ]}
    />
  );
};

export default SocailMediaLinks;
