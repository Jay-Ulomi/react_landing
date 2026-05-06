import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to all [data-reveal] descendants of the
 * returned ref.  A MutationObserver watches for dynamically added children
 * (e.g. cards rendered after an API response) and observes them too.
 * When an element enters the viewport it gets data-visible="true".
 */
export function useScrollReveal(rootMargin = '0px 0px -8% 0px') {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07, rootMargin }
    )

    const observe = (el: Element) => {
      if (!el.hasAttribute('data-visible')) io.observe(el)
    }

    // Observe elements already in the DOM
    container.querySelectorAll<Element>('[data-reveal]').forEach(observe)
    if (container.hasAttribute('data-reveal')) observe(container)

    // Watch for elements added later (API-rendered cards, etc.)
    const mo = new MutationObserver(mutations => {
      mutations.forEach(mut => {
        mut.addedNodes.forEach(node => {
          if (node.nodeType !== Node.ELEMENT_NODE) return
          const el = node as Element
          if (el.hasAttribute('data-reveal')) observe(el)
          el.querySelectorAll<Element>('[data-reveal]').forEach(observe)
        })
      })
    })
    mo.observe(container, { childList: true, subtree: true })

    return () => { io.disconnect(); mo.disconnect() }
  }, [rootMargin])

  return ref
}
