"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Zap, Gift, ArrowRight, Phone } from "lucide-react"
import { useEffect } from "react"

interface WelcomePopupProps {
  isOpen: boolean
  onClose: () => void
  onInquiryClick: () => void
}

export function WelcomePopup({ isOpen, onClose, onInquiryClick }: WelcomePopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="w-[calc(100vw-2rem)] max-w-[400px] p-0 overflow-hidden border-0 rounded-xl sm:rounded-lg gap-0 bg-white dark:bg-gray-900" 
        style={{ zIndex: 9999 }}
      >
        <DialogTitle className="sr-only">Welcome to Shri Guru Traders</DialogTitle>
        <DialogDescription className="sr-only">
          Special offer on premium batteries with exclusive discounts and best value guarantee
        </DialogDescription>
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 sm:p-6 text-primary-foreground relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <div className="flex flex-col items-center gap-3 mb-3 text-center">
            <img 
              src="/logo.png" 
              alt="Shri Guru Traders Logo"
              className="w-20 h-10 sm:w-32 sm:h-14 rounded-lg object-contain"
            />
            <div>
              <h2 className="text-base sm:text-lg font-bold">Welcome to</h2>
              <p className="text-xl sm:text-2xl font-bold">Shri Guru Traders</p>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-xs sm:text-sm text-center">Your Trusted Power Partner</p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
            <p className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span>Premium Batteries for All Vehicles</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span>Free Doorstep Delivery</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span>Best Value Guarantee</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2.5 pt-2">
            <Button
              onClick={onInquiryClick}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 sm:h-12 text-sm sm:text-base font-semibold"
            >
              Get Free Quote Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose} 
              className="w-full h-11 sm:h-12 bg-transparent text-sm sm:text-base"
            >
              <Phone className="mr-2 w-4 h-4" />
              Call: +91 7974146200
            </Button>
          </div>

          <p className="text-[10px] sm:text-xs text-center text-muted-foreground pt-1">
            No spam, we respect your privacy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}