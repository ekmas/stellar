import type { MarkdownRecord } from '@/types'

export default function SearchResults({
  message,
  matchedItems,
}: {
  message: string | null
  matchedItems: MarkdownRecord[]
}) {
  return (
    <div className="mt-[10px] h-[calc(100%-92px)] w-full shrink rounded-md border border-black/20 p-[10px] dark:border-white/20">
      {message ? (
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-lg">{message}</p>
        </div>
      ) : (
        <div className="search-list flex h-full w-full flex-col gap-[10px] overflow-y-auto p-[5px]">
          {matchedItems.map((item) => {
            return (
              <a
                href={location.origin + item.url}
                className="w-full rounded-md p-[10px] transition-all hover:bg-black/10 dark:hover:bg-white/10"
              >
                <h4 className="text-xl">{item.title}</h4>
                <p className="mt-2 opacity-80">{item.description}</p>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
