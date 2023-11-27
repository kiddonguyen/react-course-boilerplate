import create from "zustand";

const useAccordionStore = create((set) => ({
  show: false,
  toggleShow: () => set((state) => ({ show: !state.show })),
}));

function useAccordion() {
  const { show, toggleShow } = useAccordionStore();
  return { show, toggleShow };
}

export { useAccordion };
