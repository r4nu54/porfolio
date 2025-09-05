import rss from '@astrojs/rss';
import { info } from '@/data/info';

export async function GET(context) {
    const posts = info.projects.map(project => ({
        title: project.title,
        description: project.description,
        link: project.link,
        pubDate: new Date(project.date),
    }));

    return rss({
        title: info.name,
        description: info.about,
        site: context.site,
        items: posts,
        customData: `<language>es-es</language>`,
    });
} 