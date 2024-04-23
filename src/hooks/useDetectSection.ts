import { useEffect, useState } from "react";
import { NAVBAR_HEIGHT } from "../constants/Menu";

interface Props {
  searchSelector?: string;
  offSetTop?: number
}

export default function useDetectSection<T>({ searchSelector = "[data-sections]", offSetTop = NAVBAR_HEIGHT }: Props) {
  const [sectionInView, setSectionInView] = useState<T>()

  useEffect(() => {

    function handleScroll() {
      const sections = document.querySelectorAll<HTMLElement>(searchSelector)
      let firstSectionInView = undefined;
      let max = window.innerHeight;
      console.log(
        { max }
      )
      sections.forEach(section => {
        const section_name = section.dataset.sections;
        const rect = section.getBoundingClientRect();
        const rectTop = rect.top - offSetTop;
        console.log({ rectTop, section_name, max })
        if (rectTop >= 0 && rectTop < max) {
          max = rectTop
          firstSectionInView = section_name
        }
      })
      console.log(firstSectionInView)
      // TODO: fix generic type
      setSectionInView(firstSectionInView as T)
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return sectionInView
}
