# How to Add New Content

This guide shows you how to easily add new news articles and resource documents to your website.

---

## Adding New News Articles

### Step 1: Open the news detail page
File: `app/news/[id]/page.tsx`

### Step 2: Add your article to the newsData object

```typescript
const newsData = {
  // ... existing articles ...
  
  7: {  // Use the next available ID number
    id: 7,
    title: 'Your Article Title Here',
    excerpt: 'A brief summary of your article (shown on the news listing page)',
    date: '2024-02-08',  // Format: YYYY-MM-DD
    category: 'Announcements',  // Options: Announcements, Projects, Programs, Community, Awards
    author: 'Author Name',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-xxxxx',  // Use Unsplash or your own images
    content: {
      introduction: 'Opening paragraph that introduces the article topic...',
      sections: [
        {
          heading: 'First Section Heading',
          text: 'Content for the first section. This can be several paragraphs long...',
        },
        {
          heading: 'Second Section Heading',
          text: 'Content for the second section...',
        },
        // Add as many sections as needed
      ],
      conclusion: 'Final thoughts and conclusion paragraph...',
    },
    stats: [
      { label: 'Metric Name', value: '100' },
      { label: 'Another Metric', value: '50%' },
      { label: 'Third Metric', value: '1,000' },
      { label: 'Fourth Metric', value: '25' },
    ],
  },
}
```

### Step 3: Update the news listing page (optional)
File: `app/news/page.tsx`

Add your article to the `newsItems` array:

```typescript
const newsItems = [
  // ... existing items ...
  {
    id: 7,  // Same ID as in newsData
    title: 'Your Article Title Here',
    excerpt: 'A brief summary...',
    date: '2024-02-08',
    category: 'Announcements',
    image: 'https://images.unsplash.com/photo-xxxxx',
    featured: false,  // Set to true if you want it as the featured article
  },
]
```

### Step 4: Test
Navigate to `/news/7` to see your new article!

---

## Adding New Resource Documents

### Step 1: Open the resources data file
File: `lib/resourcesData.ts`

### Step 2: Add your resource to the resourcesData object

```typescript
export const resourcesData: Record<string, PDFResource> = {
  // ... existing resources ...
  
  'your-resource-slug': {  // Use a URL-friendly slug
    title: 'Your Resource Title',
    type: 'Report',  // Options: 'Report', 'Guide', 'Material'
    date: '2024-02-08',  // Format: YYYY-MM-DD
    category: 'Your Category Name',
    metadata: {
      author: 'Author Name',
      organization: 'Big Ship Organization',
      version: '1.0',
    },
    content: {
      introduction: 'Opening paragraph introducing the resource...',
      sections: [
        {
          heading: 'Main Section Heading',
          text: 'Content for this section...',
          subsections: [  // Optional: Add subsections for more detail
            {
              subheading: 'Subsection Title',
              text: 'Subsection content...',
            },
          ],
        },
        {
          heading: 'Another Section',
          text: 'More content...',
        },
        // Add as many sections as needed
      ],
      conclusion: 'Final summary and conclusion...',  // Optional
    },
  },
}
```

### Step 3: Test
- View online: Navigate to `/resources/your-resource-slug`
- Download PDF: Click the "Download PDF" button on the resource page

---

## Content Guidelines

### News Articles

**Title:**
- Keep it concise and descriptive
- Use title case
- Aim for 8-12 words

**Excerpt:**
- 1-2 sentences
- Summarize the main point
- Entice readers to click

**Introduction:**
- 2-3 sentences
- Set the context
- Explain why it matters

**Sections:**
- Use 3-7 sections
- Each section should cover one main idea
- Keep paragraphs focused and readable

**Stats:**
- Use 4 statistics
- Make them impactful and relevant
- Use clear, simple labels

**Images:**
- Use high-quality images (1920x1080 or larger)
- Ensure images are relevant to content
- Unsplash is a great free source

---

### Resource Documents

**Title:**
- Clear and descriptive
- Professional tone
- Include year if applicable

**Type:**
- **Report**: Annual reports, project reports, assessments
- **Guide**: How-to guides, manuals, best practices
- **Material**: Templates, toolkits, forms

**Introduction:**
- 3-4 sentences
- Explain the purpose
- Describe what readers will learn

**Sections:**
- Use 5-10 sections for comprehensive coverage
- Each section = one major topic
- Use subsections for detailed breakdowns

**Subsections:**
- Optional but recommended for complex topics
- 2-5 subsections per section
- Keep focused on specific points

**Conclusion:**
- Optional but recommended
- Summarize key takeaways
- Include call to action if appropriate

---

## Image Resources

### Free High-Quality Images:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Recommended Search Terms:
- "conservation"
- "environment"
- "community"
- "mangrove"
- "recycling"
- "farming"
- "coastal"
- "teamwork"

### Image Format:
```
https://images.unsplash.com/photo-[photo-id]?w=1920&q=80
```

---

## Category Options

### News Categories:
- Announcements
- Projects
- Programs
- Community
- Awards

### Resource Categories:
- Annual Reports
- Project Reports
- Conservation Guides
- Environmental Guides
- Training Materials
- Policy Documents

---

## Tips for Great Content

### Writing Style:
- ✅ Use clear, simple language
- ✅ Be specific with numbers and facts
- ✅ Tell stories that engage readers
- ✅ Use active voice
- ✅ Break up long paragraphs

### Structure:
- ✅ Start with most important information
- ✅ Use headings to organize content
- ✅ Include concrete examples
- ✅ End with clear conclusions

### PDFs:
- ✅ Content will be formatted automatically
- ✅ Colors and styling are handled by the template
- ✅ Focus on writing clear, well-organized content
- ✅ Test the PDF output after adding content

---

## Testing Checklist

Before publishing new content:

- [ ] Check spelling and grammar
- [ ] Verify all dates are correct
- [ ] Test the page loads without errors
- [ ] Check on mobile device
- [ ] Test PDF download (for resources)
- [ ] Verify images load properly
- [ ] Ensure links work correctly
- [ ] Review content for accuracy

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify your JSON syntax is correct
3. Ensure all required fields are filled
4. Check that IDs/slugs are unique
5. Review existing examples for reference

---

## Quick Reference

### Minimum Required Fields - News:
```typescript
{
  id: number,
  title: string,
  excerpt: string,
  date: string,
  category: string,
  author: string,
  readTime: string,
  image: string,
  content: { introduction, sections, conclusion },
  stats: array
}
```

### Minimum Required Fields - Resources:
```typescript
{
  title: string,
  type: 'Report' | 'Guide' | 'Material',
  date: string,
  category: string,
  content: { introduction, sections }
}
```
