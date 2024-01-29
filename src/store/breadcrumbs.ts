import { create } from "zustand";

interface IBreadcrumbsStore {
  breadcrumbs: IBreadcrumbs[];
  setBreadcrumbs: (breadcrumbs: IBreadcrumbs[]) => void;
  clearBreadcrumbs: () => void;
}

const useBreadcrumbsStore = create<IBreadcrumbsStore>()((set) => ({
  breadcrumbs: [],
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
  clearBreadcrumbs: () => set({ breadcrumbs: [] }),
}))

export { useBreadcrumbsStore }
