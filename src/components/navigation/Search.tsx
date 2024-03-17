import { useState, useRef, type ChangeEvent } from 'react'
import Fuse, { type FuseResult } from 'fuse.js'
import clsx from 'clsx'
import { type MarkdownRecord } from '@/types'
import SearchResults from '@/components/navigation/SearchResults'
import { type LanguageKeys, SEARCH } from '@/i18n/ui'

export default function Search({
  docs,
  lang,
}: {
  docs: MarkdownRecord[]
  lang: LanguageKeys
}) {
  const [isOverlayActive, setIsOverlayActive] = useState(false)
  const [matchedItems, setMatchedItems] = useState<MarkdownRecord[]>([])
  const [message, setMessage] = useState<string | null>('')

  const overlayRef = useRef(null)

  const options = {
    keys: ['title', 'description'],
    isCaseSensitive: false,
  }

  const fuse = new Fuse(docs, options)

  const closeOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      setIsOverlayActive(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim()

    if (inputValue.length === 0) {
      setMatchedItems([])
      if (message) setMessage(null)
    } else if (inputValue.length > 0 && inputValue.length < 3) {
      setMessage(SEARCH[lang].keepTyping)
    } else {
      const searchResult: FuseResult<MarkdownRecord>[] = fuse.search(inputValue)
      const items: MarkdownRecord[] = searchResult.map((result) => result.item)
      setMatchedItems(items)

      if (items.length === 0) {
        setMessage(SEARCH[lang].noResults)
      } else {
        setMessage(null)
      }
    }
  }

  return (
    <>
      <button
        onClick={() => {
          setIsOverlayActive(true)
        }}
        className="flex w-full items-center gap-4 rounded-base px-6 py-2 outline outline-1 outline-black/20 transition-[background-color] hover:bg-black/20 dark:outline-white/20 dark:hover:bg-white/20 w400:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            className="stroke-lightModeIcon dark:stroke-darkModeIcon"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>

        <p>{SEARCH[lang].search}</p>
      </button>
      <button
        onClick={() => {
          setIsOverlayActive(true)
        }}
        className="hidden w400:inline-block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            className="stroke-lightModeIcon dark:stroke-darkModeIcon"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      <div
        ref={overlayRef}
        onClick={closeOverlay}
        className={clsx(
          'fixed left-0 top-0 z-50 h-[100dvh] w-full py-20 transition-all duration-300',
          isOverlayActive
            ? 'visible bg-black/20 opacity-100 dark:bg-white/20'
            : 'invisible bg-transparent opacity-0',
        )}
      >
        <div
          className={clsx(
            'mx-auto flex h-full w-[700px] flex-col rounded-base border border-black/50 bg-lightModeBg p-10 transition-all duration-300 dark:border-white/50 dark:bg-darkModeBg w800:w-full w800:p-5',
            isOverlayActive ? 'scale-100' : 'scale-[0.9]',
          )}
        >
          <div className="h-[82px]">
            <input
              onChange={handleInputChange}
              className="w-full rounded-base bg-transparent p-[10px] px-5 text-xl outline outline-1 outline-black/20 transition-[outline] focus:outline-black/50 dark:outline-white/20 dark:focus:outline-white/50 w600:text-lg"
              placeholder={SEARCH[lang].search}
              type="text"
            />

            {matchedItems.length > 0 && !message && (
              <p className="mt-[10px] w600:text-sm">
                {matchedItems.length} {SEARCH[lang].results}
              </p>
            )}
          </div>

          <SearchResults message={message} matchedItems={matchedItems} />
        </div>
      </div>
    </>
  )
}
