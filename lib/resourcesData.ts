import { PDFResource } from './pdfGenerator'

export const resourcesData: Record<string, PDFResource> = {
  'kuza-annual-report-2017': {
    title: 'KUZA Annual Project Completion Report',
    type: 'Report',
    date: '2017-12-31',
    category: 'Annual Reports',
    metadata: {
      author: 'Big Ship Organization',
      organization: 'Big Ship Organization',
      version: '1.0',
    },
    content: {
      introduction: 'The KUZA Project represents a significant milestone in our organization\'s commitment to community empowerment and environmental conservation. This comprehensive report details the achievements, challenges, and impact of the project throughout 2017, demonstrating our dedication to sustainable development and community engagement.',
      sections: [
        {
          heading: 'Executive Summary',
          text: 'The KUZA Project successfully completed its first phase in 2017, achieving 95% of its targeted objectives. The project engaged over 500 community members, created 75 sustainable jobs, and implemented 12 major conservation initiatives across Mombasa County. Total project investment reached KES 15 million, with measurable impacts on both environmental conservation and community livelihoods.',
        },
        {
          heading: 'Project Objectives and Scope',
          text: 'The KUZA Project was designed to address critical environmental challenges while creating economic opportunities for local communities. Our primary objectives included mangrove restoration, waste management improvement, and community capacity building.',
          subsections: [
            {
              subheading: 'Environmental Conservation',
              text: 'Restoration of 50 hectares of degraded mangrove forests, establishment of 3 community nurseries, and protection of critical coastal ecosystems.',
            },
            {
              subheading: 'Economic Empowerment',
              text: 'Creation of 75 green jobs, training of 200 community members in sustainable practices, and establishment of 5 community-based enterprises.',
            },
            {
              subheading: 'Community Engagement',
              text: 'Mobilization of 15 community groups, conducting 40 awareness workshops, and establishing long-term partnerships with local stakeholders.',
            },
          ],
        },
        {
          heading: 'Implementation and Activities',
          text: 'Project implementation followed a phased approach, beginning with community mobilization and baseline assessments. Key activities included mangrove planting campaigns, waste management training, and establishment of monitoring systems. Over 10,000 mangrove seedlings were planted with a survival rate of 85%, exceeding industry standards.',
        },
        {
          heading: 'Impact and Outcomes',
          text: 'The project delivered significant environmental and socio-economic benefits. Carbon sequestration capacity increased by an estimated 2,500 tons annually. Community income from sustainable activities increased by 40% on average. Water quality in project areas improved by 30%, and fish populations showed signs of recovery.',
        },
        {
          heading: 'Challenges and Lessons Learned',
          text: 'Implementation faced several challenges including seasonal weather variations, initial community skepticism, and coordination with multiple stakeholders. Key lessons included the importance of early community engagement, flexible implementation timelines, and robust monitoring systems. These insights have been incorporated into future project designs.',
        },
        {
          heading: 'Financial Summary',
          text: 'Total project expenditure was KES 14.8 million against a budget of KES 15 million, representing 98.7% budget utilization. Major cost categories included community mobilization (25%), conservation activities (40%), capacity building (20%), and monitoring and evaluation (15%). All expenditures were audited and found to be in compliance with donor requirements.',
        },
        {
          heading: 'Sustainability and Future Plans',
          text: 'Sustainability mechanisms include community ownership of planted areas, establishment of revolving funds for ongoing activities, and integration with county government conservation programs. Phase 2 of the project is planned for 2018-2020, with expanded scope to cover additional areas and deeper community engagement.',
        },
      ],
      conclusion: 'The KUZA Project has demonstrated that community-led conservation can deliver significant environmental and economic benefits. The success of this project provides a replicable model for sustainable development in coastal areas. We extend our gratitude to all partners, donors, and community members who made this achievement possible.',
    },
  },
  'mangrove-conservation-guide': {
    title: 'Mangrove Conservation Guide',
    type: 'Guide',
    date: '2023-06-15',
    category: 'Conservation Guides',
    metadata: {
      author: 'Big Ship Organization Environmental Team',
      organization: 'Big Ship Organization',
      version: '2.0',
    },
    content: {
      introduction: 'Mangroves are among the most productive and biologically diverse ecosystems on Earth. This comprehensive guide provides practical information for communities, organizations, and individuals interested in mangrove conservation and restoration. Drawing from our extensive experience in coastal Kenya, we share proven techniques and best practices.',
      sections: [
        {
          heading: 'Understanding Mangrove Ecosystems',
          text: 'Mangroves are unique trees and shrubs that grow in coastal saline or brackish water. They provide critical ecosystem services including coastal protection, carbon sequestration, nursery grounds for fish, and livelihoods for coastal communities.',
          subsections: [
            {
              subheading: 'Types of Mangroves in Kenya',
              text: 'Kenya hosts nine mangrove species, with the most common being Rhizophora mucronata, Avicennia marina, and Ceriops tagal. Each species has specific ecological requirements and plays distinct roles in the ecosystem.',
            },
            {
              subheading: 'Ecosystem Services',
              text: 'Mangroves sequester up to 4 times more carbon than terrestrial forests, protect coastlines from erosion and storm surges, filter pollutants from water, and support commercial fisheries by providing breeding grounds.',
            },
          ],
        },
        {
          heading: 'Threats to Mangrove Forests',
          text: 'Mangroves face multiple threats including deforestation for development, overharvesting for timber and charcoal, pollution from agricultural and industrial sources, and climate change impacts such as sea level rise and increased storm intensity.',
        },
        {
          heading: 'Mangrove Restoration Techniques',
          text: 'Successful restoration requires careful site selection, appropriate species selection, proper planting techniques, and long-term monitoring. Community involvement is essential for sustainability.',
          subsections: [
            {
              subheading: 'Site Assessment',
              text: 'Evaluate hydrology, soil conditions, salinity levels, and historical mangrove presence. Identify and address causes of degradation before planting.',
            },
            {
              subheading: 'Nursery Establishment',
              text: 'Collect propagules during peak season, establish community nurseries with proper irrigation and shade, and maintain seedlings for 3-6 months before outplanting.',
            },
            {
              subheading: 'Planting Methods',
              text: 'Plant during rainy season for optimal survival, space seedlings 1-2 meters apart, plant at appropriate tidal levels for each species, and protect from herbivory and wave action.',
            },
            {
              subheading: 'Monitoring and Maintenance',
              text: 'Conduct regular survival assessments, replace dead seedlings, control invasive species, and document growth rates and ecosystem recovery indicators.',
            },
          ],
        },
        {
          heading: 'Community Engagement',
          text: 'Successful conservation requires active community participation. Establish community management committees, provide training on sustainable harvesting, develop alternative livelihood programs, and ensure equitable benefit sharing from conservation activities.',
        },
        {
          heading: 'Policy and Legal Framework',
          text: 'Kenya\'s mangroves are protected under the Forest Conservation and Management Act 2016 and the Environmental Management and Coordination Act. Communities can obtain user rights through participatory forest management agreements with Kenya Forest Service.',
        },
        {
          heading: 'Monitoring and Evaluation',
          text: 'Establish baseline conditions, monitor survival rates and growth, assess ecosystem recovery indicators including fish populations and water quality, document socio-economic benefits, and adapt management strategies based on results.',
        },
      ],
      conclusion: 'Mangrove conservation is essential for coastal resilience and community livelihoods. By following the techniques and principles outlined in this guide, communities and organizations can successfully restore and protect these vital ecosystems. Big Ship Organization remains committed to supporting mangrove conservation efforts across Kenya.',
    },
  },
  'waste-management-best-practices': {
    title: 'Waste Management Best Practices',
    type: 'Guide',
    date: '2023-08-20',
    category: 'Environmental Guides',
    metadata: {
      author: 'Big Ship Organization RECO Team',
      organization: 'Big Ship Organization',
      version: '1.5',
    },
    content: {
      introduction: 'Effective waste management is crucial for environmental health, public safety, and sustainable development. This guide presents best practices for waste management at household, community, and organizational levels, based on our successful RECO (Recycling and Composting) project implementation in Mombasa County.',
      sections: [
        {
          heading: 'Waste Management Hierarchy',
          text: 'The waste management hierarchy prioritizes waste prevention, followed by reuse, recycling, recovery, and finally disposal. This approach minimizes environmental impact and maximizes resource efficiency.',
          subsections: [
            {
              subheading: 'Prevention and Reduction',
              text: 'The most effective strategy is to prevent waste generation. Choose products with minimal packaging, buy in bulk, avoid single-use items, and plan purchases to reduce waste.',
            },
            {
              subheading: 'Reuse',
              text: 'Extend product life through repair, repurposing, and sharing. Donate usable items, use refillable containers, and choose durable products over disposable alternatives.',
            },
            {
              subheading: 'Recycling',
              text: 'Separate recyclable materials including paper, plastic, glass, and metals. Clean containers before recycling, and understand local recycling guidelines and facilities.',
            },
          ],
        },
        {
          heading: 'Household Waste Segregation',
          text: 'Proper waste segregation at source is the foundation of effective waste management. Establish separate bins for organic waste, recyclables, and non-recyclables. Educate all household members on proper segregation practices.',
        },
        {
          heading: 'Composting Organic Waste',
          text: 'Organic waste comprises 40-60% of household waste and can be composted to create valuable soil amendment. Composting reduces landfill waste, decreases methane emissions, and produces nutrient-rich compost for gardens.',
          subsections: [
            {
              subheading: 'Home Composting Methods',
              text: 'Options include traditional compost piles, compost bins, vermicomposting (worm composting), and bokashi fermentation. Choose based on available space, waste volume, and desired processing time.',
            },
            {
              subheading: 'Composting Guidelines',
              text: 'Maintain proper carbon-to-nitrogen ratio (browns to greens), ensure adequate moisture and aeration, turn regularly, and monitor temperature. Avoid meat, dairy, and diseased plants.',
            },
          ],
        },
        {
          heading: 'Recycling Programs',
          text: 'Establish or participate in community recycling programs. Identify local recycling facilities and collection services. Understand which materials are accepted and how to prepare them for recycling.',
        },
        {
          heading: 'Hazardous Waste Management',
          text: 'Hazardous waste including batteries, electronics, chemicals, and medical waste requires special handling. Never dispose of hazardous waste in regular bins. Use designated collection points and follow safety guidelines.',
        },
        {
          heading: 'Community-Level Initiatives',
          text: 'Organize community clean-up events, establish waste collection systems, create recycling cooperatives, and advocate for improved municipal waste services. Community action multiplies individual efforts.',
        },
        {
          heading: 'Business and Organizational Practices',
          text: 'Conduct waste audits to identify reduction opportunities, implement comprehensive recycling programs, choose suppliers with sustainable packaging, and educate employees on waste management practices.',
        },
      ],
      conclusion: 'Effective waste management requires commitment at all levels - individual, community, and institutional. By implementing these best practices, we can significantly reduce environmental pollution, conserve resources, and create cleaner, healthier communities. Big Ship Organization continues to support waste management initiatives and welcomes partnerships in this critical area.',
    },
  },
}

export const getResourceById = (id: string): PDFResource | undefined => {
  return resourcesData[id]
}

export const getAllResources = (): Array<PDFResource & { id: string }> => {
  return Object.entries(resourcesData).map(([id, resource]) => ({
    ...resource,
    id,
  }))
}
