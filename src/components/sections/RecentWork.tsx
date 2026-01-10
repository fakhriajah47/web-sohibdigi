import { recentWorkImages } from '@/data/projects';

/**
 * Recent work grid showing 4 project images below hero
 */
export function RecentWork() {
    return (
        <div className="pt-5" id="portfolio">
            <div>
                <img
                    src="/images/shapes/work-scribble.png"
                    alt="custom"
                    className="max-w-[300px]"
                />
            </div>
            <div className="px-3">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                    {recentWorkImages.map((image, index) => (
                        <div key={index}>
                            <div className="single-header-work-img">
                                <img
                                    src={image}
                                    alt={`project ${index + 1}`}
                                    className="border-8 border-[#ccc] rounded-[10px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
