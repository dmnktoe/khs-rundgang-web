# Changelog

## [4.0.4] - 2020-11-23

### New

- Implements a brand new GDPR / DSGVO compliance cookie management solution including a cookie policy page.
- Adds a new meta description for search engine crawlers.
- Adds a system status indicator in navigation section to have a quick look if all components are running.
- Reusable modal service.

### Changes

- Update meta theme color for installed web apps.
- Redesigned 'About' page including partner logos.
- The language selector has been entirely rewritten and now supports over 30+ new languages.

## [4.0.3] - 2020-09-11

### New

- Image thumbnails on shows and recordings can now be zoomed to have a better look on the artwork.
- Adds icons in the header for our social media pages.

### Changes

- Redesigned 'Schedule' page which is now more responsive, shows the date of the day, highlights today's day and gives the more information about the scheduled show via a modal popup.
- Updated translations strings.
- We updated the info texts on our 'About' page.
- The `recordings-list.component` (like in 'Search') makes now use of flexbox.

### Bug-Fixes

- Fixes an error where the images on the blog and project page weren't loaded on the first click.

## [4.0.2] - 2020-08-29

### New

- Adds a bunch of new translation files and also updates the source language file.
- Adds a pulsating live indicator on the live slideshow slide.
- Adds ngx-translate-extract-marker.

### Changes

- The recordings under the recordings page are now getting automatically ordered and sorted after month.
- Slice slideshow wrapper text with CSS instead of Angular string manipulation.

### Bug-Fixes

- Remove link from live slideshow slide.
- Fixed a bug where the images were to large on the shows page.

## [4.0.1] - 2020-08-28

### New

- Display the next and current live shows in the slideshow, if there are any.
- Embeds the Twitch video live stream.

### Changes

- The navigation button now shows an 'x'-icon after the toggle has been pressed.
- The single project page now shows the correct date range.

### Bug-Fixes

- Fixes a bug where images on sub pages fall out of the grid.
- Fixes a responsive bug on the about page.
- Fixes a bug where the gallery component gets too large if there is only one result.

## [4.0.0] - 2020-08-17

We present Radio Rasclat Web in version four. The entire application has been entirely rewritten from scratch to provide you an improved user experience. Another clearly defined focus is the consistency of the overall design, which now has a modern look through the different structures of all individual components.

### New

- New design system for all components.
- Updated UI experience.
- Background music player.
- New defined dark-mode.
- News and projects sections.

### Changes

- The main menu has been relocated to the top-bar as a dropdown.

### Bug-Fixes

- Responsive UI issues.

[4.0.4]: https://github.com/RadioRasclat/radio-rasclat-web/releases/tag/4.0.4
[4.0.3]: https://github.com/RadioRasclat/radio-rasclat-web/releases/tag/4.0.3
[4.0.2]: https://github.com/RadioRasclat/radio-rasclat-web/releases/tag/4.0.2
[4.0.1]: https://github.com/RadioRasclat/radio-rasclat-web/releases/tag/4.0.1
[4.0.0]: https://github.com/RadioRasclat/radio-rasclat-web/releases/tag/4.0.0
