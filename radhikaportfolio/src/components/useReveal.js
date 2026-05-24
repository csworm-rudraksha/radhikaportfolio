import { useEffect, useRef } from 'react'

/**
 * useReveal — attach to any element ref; adds .visible class when it enters the viewport.
 * @param {number} threshold — 0–1, default 0.1
 * @param {number} delay     — ms delay before adding .visible, default 0
 */
export function useReveal(threshold = 0.1, delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}
