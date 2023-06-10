export {};

interface NoticeBoardProps {
  title: any;
}

export function postNotice(notice: NoticeBoardProps) {}

export function fetchNotices() {}

export function deleteNotice(noticeId: string) {}

export function fetchNoticeByOrgId(orgId: string) {} // org relevant notices
