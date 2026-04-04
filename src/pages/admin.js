import { useLayoutEffect } from "react"

export default function AdminPage() {
    useLayoutEffect(() => (window.location.href = "https://cb-works.admin.datocms.com"), [])
    return null
}
