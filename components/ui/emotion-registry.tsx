"use client"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { useServerInsertedHTML } from "next/navigation"
import { useState } from "react"

// Collects Emotion styles during SSR and emits them in <head>, instead of Emotion
// dropping inline <style> tags into <body>, which breaks hydration
export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "css" })
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: { name: string; isGlobal: boolean }[] = []
    cache.insert = (...args) => {
      const [selector, serialized] = args
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({ name: serialized.name, isGlobal: !selector })
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prev = inserted
      inserted = []
      return prev
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null
    let styles = ""
    let dataEmotion = cache.key
    const globals: { name: string; style: string }[] = []
    for (const { name, isGlobal } of names) {
      const style = cache.inserted[name]
      if (typeof style !== "string") continue
      if (isGlobal) {
        globals.push({ name, style })
      } else {
        styles += style
        dataEmotion += ` ${name}`
      }
    }
    return (
      <>
        {globals.map(({ name, style }) => (
          <style key={name} data-emotion={`${cache.key}-global ${name}`} dangerouslySetInnerHTML={{ __html: style }} />
        ))}
        {styles && <style data-emotion={dataEmotion} dangerouslySetInnerHTML={{ __html: styles }} />}
      </>
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
