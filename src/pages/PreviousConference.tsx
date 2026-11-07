import React from 'react';
import Footer from '@/components/Footer';

const PreviousConference = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white shadow-lg border border-slate-200 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-4">
              Previous Conference
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              International Conference on Networks, Computing Systems, and Data Analytics (ICNCDA 2026)
            </h1>

            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                The conference was held during <strong>29th – 30th July 2026</strong> and was organized by the{' '}
                <strong>University of Essex, England, United Kingdom</strong>.
              </p>

              <p>
                The conference attracted many high-quality submissions and stimulated cutting-edge research discussions
                among academic pioneers, scientists, industrial engineers, and students, with the reception of more than
                <strong> 600 papers</strong> from different parts of the world.
              </p>

              <p>
                Only <strong>98 papers</strong> were accepted and registered, with an overall acceptance ratio of{' '}
                <strong>16%</strong>, and were published in two volumes of the prestigious{' '}
                <strong>Springer Lecture Notes on Networks and Systems (LNNS)</strong> series.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">Volume 1</h2>
                <p className="text-slate-700">To be updated.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">Volume 2</h2>
                <a
                  href="https://link.springer.com/book/9783032439703"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline break-all"
                >
                  https://link.springer.com/book/9783032439703
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PreviousConference;
