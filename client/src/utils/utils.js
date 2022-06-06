export const AccessCodeType = {
  password: 1,
  access_code: 2,
  public: 3,
};

export const ResultTestType = {
  score: 1,
  complete_percent: 2,
  detail: 3,
  pass_or_not_pass: 4,
};

export const RequiredInformationType = {
  phone: 0,
  full_name: 1,
  group: 2,
  email: 3,
  id: 4,
  position: 5,
};

export const CertificatesType = {
  pass_the_test: 1,
  join_the_test: 2,
};

export const AntiCheatingType = {
  prevent_copy: 0,
  full_screen_mode: 1,
  prevent_paste: 2,
  unfocus_on_screen: 3,
};

export const Receiver = {
  send_to_examinee: 1,
  other_emails: 2,
};

export const From = {
  default_email: 1,
  other_email: 2,
};

export const SendScore = {
  score: 1,
  completion_percentage: 2,
};

export const SendResult = {
  pass_or_fail: 1,
  display_answer: 2,
};

export function renderExtra(array) {
  const string = [];
  for (const index in array) {
    if (array[index].status) {
      string.push(array[index].name);
    }
  }
  return string;
}
