import { TwitterIcon } from '@icons/TwitterIcon'
import { DiscordIcon } from '@icons/DiscordIcon'

import { SocialRss } from '@components/SocialRss'
import { GhostSettings } from '@lib/ghost'

interface SocialLinkProps {
  siteUrl: string
  site: GhostSettings
}

export const SocialLinks = ({ siteUrl, site }: SocialLinkProps) => {
  const twitterUrl = site.twitter && `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
  const discordUrl = "https://discord.gg/asgHzx2xDa"

  const { processEnv } = site
  const { memberSubscriptions } = processEnv

  return (
    <>
      <a href={discordUrl} className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Discord">
        <DiscordIcon />
      </a>
      {site.twitter && (
        <a href={twitterUrl} className="social-link social-link-tw" target="_blank" rel="noopener noreferrer" title="Twitter">
          <TwitterIcon />
        </a>
      )}
      {!memberSubscriptions && <SocialRss {...{ siteUrl }} />}
    </>
  )
}
