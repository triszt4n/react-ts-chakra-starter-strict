import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage: React.FC<Props> = ({ title, src, slug }) => {
  // eslint-disable-next-line @next/next/no-img-element
  const image = <img src={src} alt={title} /* layout="responsive" placeholder="blur" width={1024} height={1024} */ />
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
