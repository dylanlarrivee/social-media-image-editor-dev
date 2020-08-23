import React from 'react';

  const CampaignRegionRuleTable = (props) => {
    return (
        <div >
          <table className="dcm-region-rule-header-table">
            <thead>
              <tr>
              DCM Rule Breakdown
              </tr>
            </thead>
          </table>
        <table className="dcm-region-rule-table">
          <thead>
            <tr>
              <th className="dcm-region-rule-th">DCM Rule Name</th>
              <th className="dcm-region-rule-th">Send Count</th>
              <th className="dcm-region-rule-th">Export Adience Group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DCM Rule 1</td>
              <td>2000</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
            <tr>
              <td>DCM Rule 2</td>
              <td>500</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr><tr>
              <td>DCM Rule 3</td>
              <td>500</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
            <tr>
              <td>DCM Rule 3</td>
              <td>100</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
            <tr>
              <td>DCM Rule 4</td>
              <td>200000</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
            <tr>
              <td>DCM Rule 5</td>
              <td>400</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    );
  }

const DCMCampaigns = (props) => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>DCM Region</th>
              <th>Send Count</th>
              <th>Export Adience Group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Campaign 1</td>
              <td>Camp1_Region</td>
              <td>2000</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
            </tbody>
            </table>
            <CampaignRegionRuleTable />
            <table>
            <tbody>
            <tr>
              <td>Campaign 2</td>
              <td>Camp2_Region</td>
              <td>100</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
            <tr>
              <td>Campaign 3</td>
              <td>Camp3_Region</td>
              <td>200000</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
            <tr>
              <td>Campaign 4</td>
              <td>Camp4_Region</td>
              <td>400</td>
              <td>
                {" "}
                <button
                >
                  Export
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default DCMCampaigns;

