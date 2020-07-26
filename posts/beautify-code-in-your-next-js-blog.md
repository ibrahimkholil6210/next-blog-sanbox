---
title: Beautify code in your Next.js blog
date: 2020-03-04T05:00:00Z
subtitle: After some trial and error, I styled custom code blocks using Highlight.js and  TailwindCSS
socialimage: https://res.cloudinary.com/raskin-me/image/upload/v1583373883/raskin.me/images/beautify-code-nextjs-social_nhb3w6.jpg

---
It definitely took me way too long to get code blocks correctly highlighted on my blog. Next.js seems to have less tutorials out there in general, especially for specific use cases like these. I hope to fix that, at least a little bit, with my own blog. As I experience issues and overcome each challenge, my plan is to write up a post about it. Here's #1!

## Quick Background

As a starting point, I want to outline the architecture of my website. As Next.js goes, I have page components in the `/pages` directory. Blog posts are generated dynamically via the `/pages/blog/[slug].tsx` page, where the `getInitialProps` function pulls content from the `.md` files located in the `/posts` folder.

If this is new to you, there are tutorials that explain how this works (e.g. [Next.js docs](https://nextjs.org/learn/basics/create-dynamic-pages)). Feel free to also view the code on the [GitHub repo](https://github.com/perryraskin/raskin.me).

## Before Highlight.js

For a visual, below is what the `BlogPostTemplate` component looked like before I did anything fancy. I will only include the relevant code to keep it short, but feel free to view the [entire file](https://github.com/perryraskin/raskin.me/blob/master/pages/blog/%5Bslug%5D.tsx) in the repo.

```javascript
<article className="mb-10 markdown">
  <header>
    <h1 className="text-5xl">{frontmatter.title}</h1>
  </header>
    <div className="mb-5 my-auto text-sm font-semibold text-neutral-400">
      {reformatDate(frontmatter.date)}
    </div>
  <div>
    <ReactMarkdown 
      source={markdownBody}
    />
  </div>
</article>
```

Notice that this code simply applies a title, date, and the contents of the `.md` file. By default, inline code and code blocks were not nicely styled, and of course I wasn't satisfied with that. Luckily, `react-markdown` takes an optional parameter called `renderers` where we can provide a custom style to HTML tags of our choosing. This is where it got confusing - I had to dive into the [source code](https://github.com/rexxars/react-markdown/blob/master/src/renderers.js) to figure out what exactly I needed to pass to it.

## The CodeBlock Component

First and foremost, make sure you have your imports for highlight.js. You can choose any theme from the `/styles` folder that's provided.

```javascript
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/nord.css';
```

After **a lot** of trial and error, I realized I needed to create a custom component to pass to `renderers`. I'm sure there are other ways to do this, but this made the most sense to me, and it worked quite nicely.

```javascript
interface CodeBlockProps {
  value: any;
}

const CodeBlock: NextPage<CodeBlockProps> = ({ value }) => {
  return (
    <div>
      <Highlight>
        {value}
      </Highlight>
      <br />
    </div>
  )
}
```

Since the `code` parameter of `renderers` requires a component with a `<code>` element that's inside of a `<pre>` element, this is what I came up with. `<Hightlight />` includes all of that, so I added it inside this component, and passed the `value` (the actual code) as props.

```javascript
<ReactMarkdown 
  source={markdownBody}
  renderers={{
    code: CodeBlock
  }}
/>
```

Then, I simply passed the `CodeBlock` component to `code` and finally it worked! Just be sure you don't have PurgeCSS stripping your highlight.js CSS, and you should be good to go.