import CaseStudyPage from '@/components/patterns/case-study-page';
import { projects } from '@/content/portfolio';
import { getProjectMetadata } from '@/lib/metadata';

const project = projects.find((item) => item.slug === 'inpla')!;

export const metadata = getProjectMetadata(project);

const InplaCaseStudyPage = () => <CaseStudyPage project={project} />;

export default InplaCaseStudyPage;
