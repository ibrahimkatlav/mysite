// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "src/content/blog/*",
      entryLayout: "content",
      format: {
        contentField: "content",
      },

      schema: {
        title: fields.slug({
          name: {
            label: "Title",
          },
        }),

        layout: fields.text({
          label: 'Blog Düzeni(Dokunma)',
          description: 'Page layout file path',
          defaultValue: "../../layouts/post.astro"
        }),

        description: fields.text({
          label: "Meta Açıklama",
        }),


        date: fields.datetime({
          label: "Schema ve Algoritma Tarih",
        }),

        updateDate: fields.datetime({
          label: "Schema ve Algoritma Güncelleme Tarihi",
        }),

        tarih: fields.text({
          label: "Frontend Tarih",
        }),

        guncellemetarihi: fields.text({
          label: "Frontend Güncelleme Tarihi",
        }),

        image: fields.image({
          label: "Og Görsel",
          description: "1600x1080 önerilir.",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
        }),

        

        content: fields.mdx({
          label: "Content",
          components: {
            
          },
          options: {
            image: {
              directory: "src/assets/images/blog",

              // Use the @assets path alias
              publicPath: "@assets/images/blog/",
            },
          },
        }),
      },
    }),


  },
});