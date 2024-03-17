import type { MarkdownRecord } from '@/types'

export default function SearchResults({
  message,
  matchedItems,
}: {
  message: string | null
  matchedItems: MarkdownRecord[]
}) {
  return (
    <div className="mt-[10px] h-[calc(100%-92px)] w-full shrink rounded-base border border-black/20 p-[10px] dark:border-white/20">
      {message ? (
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-lg w600:text-base">{message}</p>
        </div>
      ) : (
        <div className="search-list flex h-full w-full flex-col gap-[10px] overflow-y-auto p-[5px]">
          {matchedItems.map((item) => {
            return (
              <a
                href={location.origin + item.url}
                className="w-full rounded-base p-[10px] transition-all hover:bg-black/10 dark:hover:bg-white/10 w600:p-1.5"
              >
                <h4 className="text-xl w600:text-lg">{item.title}</h4>
                <p className="mt-2 opacity-80 w600:text-sm">
                  {item.description}
                </p>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
