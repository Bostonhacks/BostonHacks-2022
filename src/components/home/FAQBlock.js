import React from 'react';
import './FAQBlock.css';

/**
 * 
 * @param {String} props.pairs 
 * @returns 
 */
export default function FAQBlock({ pairs }) {
    var qaPairs = [];
    var size = Object.keys(pairs).length;

    // Build out table rows
    for (let i = 0; i < size; i++) {
        const question = pairs[i]['q'];
        const answer = pairs[i]['a'];
        qaPairs.push(buildRow(question, answer));
    }

    return (

        <div id='faq'>
            <h1 style={{
                color: 'white', textAlign: 'center', font: 'PresicavLt',
                fontStyle: 'normal',
                fontWeight: 300,
                fontSize: '50px',
                lineHeight: '61px',
            }}>FAQ</h1>
            <table>
                {qaPairs}
            </table>
        </div>
    );
}


const buildRow = (question, answer) => {
    return (
        <div class="faq-qa-group">
            {/* Question row */}
            <tr class="faq-question">
                <th class="faq-lead">
                    <svg width="43" height="30" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.675166 30.9057H8.38856V11.6222C8.38856 9.47351 10.1516 7.76554 12.2453 7.76554H30.9778V0.0521431H12.2453C5.90926 0.0521431 0.675166 5.23114 0.675166 11.6222V30.9057ZM8.38856 38.6191H27.1211C30.0963 38.6191 32.796 37.5172 34.8345 35.644C36.9281 37.5172 39.6278 38.6191 42.603 38.6191V30.9057C40.4543 30.9057 38.6912 29.1978 38.6912 27.049V7.76554H31.0329V27.049C31.0329 29.1978 29.2698 30.9057 27.1211 30.9057H8.38856V38.6191Z" fill="white" fill-opacity="0.71" />
                    </svg>
                </th>
                <th class="faq-q-body">{question}</th>
            </tr>

            {/* Answer row */}
            <tr class="faq-answer">
                <th class="faq-lead">
                    <svg width="39" height="34" viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.90221 40.5455L15.8497 5.22912C16.1803 4.34759 17.5026 4.84346 17.2271 5.72499L5.657 37.4601C4.2796 40.9311 9.73408 42.9146 10.9462 39.3885L23.5631 4.95365L35.7393 38.1764C36.0698 39.0579 34.6924 39.6639 34.3068 38.6722L24.5548 11.8957C24.1692 11.0142 22.957 11.0142 22.5714 11.8957L20.643 17.1298C20.5879 17.3502 20.5879 17.5706 20.643 17.846L23.7284 26.1104H18.7698C17.9433 26.1104 17.172 26.6614 16.8965 27.4327L16.2905 29.0856C15.8497 30.2977 16.7312 31.7302 18.1637 31.7302H25.7669L26.2628 33.1076H15.5742C14.1968 33.1076 14.1968 35.2012 15.5742 35.2012H26.4281C28.0259 35.2012 28.687 33.6585 28.3013 32.5566L27.6953 30.9037C27.4198 30.1324 26.6485 29.6365 25.822 29.6365H18.329L18.8249 28.204H23.8937C25.2711 28.204 26.2077 26.7715 25.7669 25.5594L22.7367 17.4604L23.5631 15.3116L32.3784 39.3885C33.7007 42.9697 38.9899 40.821 37.6676 37.4601L25.3813 3.96192C24.7752 2.19886 22.2959 2.19886 21.6898 3.96192L8.96274 38.6722C8.63216 39.5538 7.25477 39.0579 7.58535 38.1764L19.2105 6.44123C20.4226 2.9702 15.2987 0.986757 13.8663 4.51288L0.973861 39.8292C0.478 40.9862 2.29616 41.9229 2.90221 40.5455Z" fill="white" fill-opacity="0.71" />
                    </svg>
                </th>
                <th class="faq-a-body">{answer}</th>
            </tr>
        </div>
    );
}