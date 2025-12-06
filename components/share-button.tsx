"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Share2, Link, MessageCircle, Mail } from "lucide-react"

interface ShareButtonProps {
  productName: string
  productUrl?: string
}

export function ShareButton({ productName, productUrl }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const currentUrl = productUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const shareText = `Check out this ${productName} battery - ${currentUrl}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`
    window.open(whatsappUrl, '_blank')
  }

  const shareViaEmail = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(`Check out ${productName}`)}&body=${encodeURIComponent(shareText)}`
    window.open(emailUrl)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={copyToClipboard} className="flex items-center gap-2">
          <Link className="w-4 h-4" />
          {copied ? "Copied!" : "Copy Link"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnWhatsApp} className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Share on WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareViaEmail} className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Share via Email
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
