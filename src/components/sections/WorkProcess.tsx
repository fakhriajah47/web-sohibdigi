import { SectionHeader } from '@/components/ui';
import { workSteps } from '@/data/workProcess';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Work process section with 3-step cards
 */
export function WorkProcess() {
    const { t } = useI18n();

    return (
        <section id="how" className="lg:pt-25 pt-15">
            <div className="container">
                <SectionHeader
                    badge={t('work.header.badge')}
                    title={t('work.header.title')}
                    subtitle={t('work.header.subtitle')}
                />

                <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12.5 lg:pt-15 pt-0">
                    {workSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className="flex flex-col items-center text-center relative sm:px-[25px] px-0"
                        >
                            {/* Connecting arrow shapes */}
                            {index > 0 && (
                                <div className="absolute top-0 left-[-110px] opacity-50 lg:block hidden">
                                    <img
                                        src={`/images/shapes/workprocess-shape${index === 1 ? '2' : '1'}.png`}
                                        alt="shapes"
                                    />
                                </div>
                            )}

                            {/* Step icon with number badge */}
                            <div className="lg:w-[65px] lg:h-[65px] w-12.5 h-12.5 rounded-full flex items-center justify-center border border-[rgba(0, 0, 0, 0.08)] bg-primary relative">
                                <i className={`${step.icon} text-[35px] text-white`}></i>
                                <div className="overlay-list absolute -right-2 -top-2 bg-white flex justify-center items-center text-primary lg:w-7.5 lg:h-7.5 w-6 h-6 rounded-full">
                                    <span className="lg:font-medium text-sm">{step.number}</span>
                                </div>
                            </div>

                            {/* Step content */}
                            <div className="lg:pt-6 pt-5">
                                <div className="title-box">
                                    <h3 className="lg:text-[32px] text-[26px] lg:leading-[30px] font-bold">
                                        <a href="#">{t(`work.steps.${step.id}.title`)}</a>
                                    </h3>
                                </div>
                                <div className="text-box lg:mt-[22px] mt-4">
                                    <p className="text-lg font-medium leading-7">
                                        {t(`work.steps.${step.id}.description`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
