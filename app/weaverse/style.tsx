import { useThemeSettings } from "@weaverse/hydrogen/react-router";
import { extend } from "colord";
import namesPlugin from "colord/plugins/names";
import type { ThemeSettings } from "~/types/weaverse";

extend([namesPlugin]);

export function GlobalStyle() {
  const settings = useThemeSettings<ThemeSettings>();
  if (settings) {
    const {
      colorBackground,
      colorText,
      colorTextSubtle,
      colorTextInverse,
      colorLine,
      colorLineSubtle,
      topbarTextColor,
      topbarBgColor,
      headerBgColor,
      headerText,
      transparentHeaderText,
      footerBgColor,
      footerText,
      buttonPrimaryBg,
      buttonPrimaryBgHover,
      buttonPrimaryColor,
      buttonSecondaryBg,
      buttonSecondaryBgHover,
      buttonSecondaryColor,
      buttonOutlineTextAndBorder,
      buttonOutlineBgHover,
      comparePriceTextColor,
      saleBadgeColor,
      newBadgeColor,
      bestSellerBadgeColor,
      bundleBadgeColor,
      soldOutBadgeColor,
      productReviewsColor,
      bodyBaseSize,
      bodyBaseSpacing,
      bodyBaseLineHeight,
      h1BaseSize,
      headingBaseSpacing,
      headingBaseLineHeight,
      navHeightDesktop,
      navHeightTablet,
      pageWidth,
      radiusBase,
    } = settings;

    return (
      <style
        key="global-theme-style"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              /* Layout */
              --height-nav: ${settings.navHeightMobile}rem;
              --page-width: ${pageWidth}px;

              /* Border radius */
              --radius: ${radiusBase || 0}px;

              /* Colors (general) */
              --color-background: #f7f3ea;
              --color-text: #101613;
              --color-text-subtle: #5f6b63;
              --color-text-inverse: #f7f3ea;
              --color-line: #d9d2c2;
              --color-line-subtle: #e8e1d3;

              /* Colors (header & footer) */
              --color-topbar-text: #f7f3ea;
              --color-topbar-bg: #101613;
              --color-header-bg: #f7f3ea;
              --color-header-text: #101613;
              --color-transparent-header-text: #f7f3ea;
              --color-footer-bg: #101613;
              --color-footer-text: #f7f3ea;

              /* Colors (buttons & links) */
              --btn-primary-bg: #101613;
              --btn-primary-bg-hover: #222c27;
              --btn-primary-text: #f7f3ea;
              --btn-secondary-bg: #efe8db;
              --btn-secondary-bg-hover: #e3dbcb;
              --btn-secondary-text: #101613;
              --btn-outline-text: #101613;
              --btn-outline-bg-hover: #efe8db;

              /* Colors (product) */
              --color-compare-price-text: #7c8b82;
              --color-discount: #c24e2a;
              --color-new-badge: #5f7355;
              --color-best-seller: #c99a3f;
              --color-bundle-badge: #45544c;
              --color-sold-out-and-unavailable: #7c8b82;
              --color-product-reviews: #c99a3f;

              /* Typography */
              --body-base-size: 16px;
              --body-base-spacing: ${bodyBaseSpacing};
              --body-base-line-height: ${bodyBaseLineHeight};

              --h1-base-size: 64px;
              --heading-base-spacing: ${headingBaseSpacing};
              --heading-base-line-height: ${headingBaseLineHeight};
            }

            @media (min-width: 32em) {
              body {
                --height-nav: ${navHeightTablet}rem;
              }
            }
            @media (min-width: 48em) {
              body {
                --height-nav: ${navHeightDesktop}rem;
              }
            }
          `,
        }}
      />
    );
  }
  return null;
}

