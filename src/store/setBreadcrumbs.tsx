"use client"
import { useEffect } from "react";
import { useBreadcrumbsStore } from "./breadcrumbs";

interface IProps {
  breadcrumbs: IBreadcrumbs[],
}
export default function SetBreadcrumbs({ breadcrumbs }: IProps) {
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);
  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  })
  return null;
}
