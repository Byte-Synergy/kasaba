import { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/directory";
import ContactPageClient from "./page-c";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const t = await getDictionary(lang);

  return (
    <>
      <ContactPageClient
        select_application_type_label={t.select_application_type_label}
        contact_options={t.contact_options}
        contact_label={t.contact_label}
        email_label={t.email_label}
        helpline_phone_number={t.helpline_phone_number}
        reception_number={t.reception_number}
        contact_with_us_label={t.contact_with_us_label}
        enter_first_and_last_name_placeholder={
          t.enter_first_and_last_name_placeholder
        }
        enter_phone_number_placeholder={t.enter_phone_number_placeholder}
        enter_question_or_offer_placeholder={
          t.enter_question_or_offer_placeholder
        }
        mail_content={t.mail_content}
        name_label={t.name_label}
        phone_number_label={t.phone_number_label}
        question_or_offer_label={t.question_or_offer_label}
        request_label={t.request_label}
        send_label={t.send_label}
        main_label={t.main_label}
      />
    </>
  );
}
