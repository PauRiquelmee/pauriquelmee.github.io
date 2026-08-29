import CaseStudyPage from '@/components/patterns/case-study-page';
import { projects } from '@/content/portfolio';
import { getProjectMetadata } from '@/lib/metadata';

const project = projects.find((item) => item.slug === 'woku')!;

export const metadata = getProjectMetadata(project);

const WokuCaseStudyPage = () => <CaseStudyPage project={project} />;

export default WokuCaseStudyPage;
