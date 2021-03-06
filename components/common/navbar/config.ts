export type NavItem = {
  label: string
  path: string
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home.',
    path: '/'
  },
  {
    label: 'Blog.',
    path: '/posts'
  },
  {
    label: 'About.',
    path: '/about'
  }
]
