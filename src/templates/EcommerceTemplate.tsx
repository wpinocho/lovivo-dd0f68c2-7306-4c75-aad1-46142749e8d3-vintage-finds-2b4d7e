import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Sparkles } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b-2 border-primary/10 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-center py-2 mb-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full">
          <Sparkles className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm font-medium text-foreground">
            Free shipping on orders over $100 • Authenticated vintage pieces
          </span>
        </div>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-foreground">Vintage Finds</div>
                <div className="text-xs text-muted-foreground">Secondhand & Recommerce</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Stories
              </Link>
              <button className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Sell
              </button>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-primary/10"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-foreground text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Vintage Finds</div>
                <div className="text-xs text-white/70">Secondhand & Recommerce</div>
              </div>
            </div>
            <p className="text-white/70 mb-4 max-w-sm">
              Curated vintage fashion from every era. Sustainable, authentic, and full of character.
            </p>
            <SocialLinks />
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Shop</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors">
                All Products
              </Link>
              <Link to="/" className="block text-white/70 hover:text-white transition-colors">
                Collections
              </Link>
              <button className="block text-white/70 hover:text-white transition-colors">
                New Arrivals
              </button>
              <button className="block text-white/70 hover:text-white transition-colors">
                Sale
              </button>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-white">About</h3>
            <div className="space-y-2">
              <Link to="/blog" className="block text-white/70 hover:text-white transition-colors">
                Our Story
              </Link>
              <button className="block text-white/70 hover:text-white transition-colors">
                Sustainability
              </button>
              <button className="block text-white/70 hover:text-white transition-colors">
                Sell With Us
              </button>
              <button className="block text-white/70 hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              &copy; 2024 Vintage Finds. All rights reserved. Sustainable fashion for a better future.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span>100% Authenticated Vintage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}