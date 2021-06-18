interface ApplicantTableItem {
  guid: string;
  name: string;
  status: string;
  canResendExpiredQuestionnaire: boolean;
  mobilePhone: string;
  emailAddress: string;
  questionnaireCompletion?: number;
  history: ApplicantUpdate[];
}

interface ApplicantUpdate {
  id: string;
  createdAt: Date;
  status: string;
  details?: string;
}

interface ApplicantTablePage {
  data: ApplicantTableItem[];
  applicantCount: number;
}

export { ApplicantTableItem, ApplicantTablePage };
