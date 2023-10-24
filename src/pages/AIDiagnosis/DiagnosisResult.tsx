import React from 'react';

function DiagnosisResult() {
  return (
    <div>
      <h3
        className="text-[#000000] text-left relative"
        style={{
          font: "var(--headline-2-bold, 700 20px/26px 'Mulish', sans-serif)",
        }}
      >
        Diagnosis Result{' '}
      </h3>
      <div>
        <div className="relative rounded-xl overflow-auto flex-auto px-0 pt-0">
          <div className="my-3">
            <table className="border-collapse table-auto w-full text-sm items-center  mb-0 align-top  text-slate-500">
              <thead className="align-bottom sticky">
                <tr className="h-[55px]">
                  <th className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950 opacity-70"></th>
                  <th
                    colSpan={2}
                    className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950"
                  >
                    AI Diagnosis
                  </th>
                  <th
                    colSpan={4}
                    className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950 "
                  >
                    AI Clustering
                  </th>
                </tr>
                <tr className="bg-slate-100">
                  <th className="px-9 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950  rounded-l-lg">
                    Time
                  </th>
                  <th className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950 ">
                    Value
                  </th>
                  <th className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950 ">
                    Condition
                  </th>
                  <th className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950 ">
                    L1
                  </th>
                  <th className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950 ">
                    L2
                  </th>
                  <th className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950 ">
                    L3
                  </th>
                  <th className="px-2 py-3 font-bold text-left  align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-950  rounded-r-lg">
                    B1
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white h-[300px] overflow-y-scroll">
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
                <tr className="h-[55px] border-b border-gray-100">
                  <td className="px-9">11:10:00 am</td>
                  <td className="px-2">3.056</td>
                  <td className="px-2">Normal</td>
                  <td className="px-2">0.245</td>
                  <td className="px-2">3.204</td>
                  <td className="px-2">2.234</td>
                  <td className="px-2">2.234</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisResult;
