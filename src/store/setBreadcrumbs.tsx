"use client"
import {useBreadcrumbsStore} from "./breadcrumbs";

interface IProps {
  breadcrumbs: IBreadcrumbs[],
}
export default function SetBreadcrumbs({ breadcrumbs }: IProps) {
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);
  setBreadcrumbs(breadcrumbs);
  return null;
}
