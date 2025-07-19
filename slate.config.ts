/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://undystopia.com',
  avatar: '/avatar.png',
  title: 'Undystopia',
  description: 'A blog by Arjun Bhuptani',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '©̸ Ideas in this blog are shared freely. Use them to save the world.',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/arjunbhuptani'
    },
    {
      icon: 'x',
      link: 'https://x.com/arjunbhuptani'
    }
]
});