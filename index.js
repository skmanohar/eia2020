const getMsg = () => "Hello World";
(
    function () {
        // gmail href
        const letter = document.getElementById("letter");
        const gmailIcon = document.getElementById('gmail-share');
        // const body = encodeURIComponent(letter.textContent.trim().replace(/(\s)\s*/g, '$1'));
        const body = 
`To
The Secretary,
Ministry of Environment, Forest and Climate Change,
Union Government of India,
New Delhi.

Dear Sir,
        
This is in reference to the draft EIA notification, 2020 which has been uploaded on the environment ministry’s website on 12 March 2020 seeking public comments within sixty days of the issuance of the notification. I am deeply concerned that this draft notification has been put out in the midst of a national health crisis. This makes it impossible to understand and discuss the implications of the proposed amendments. I cannot help but view this haste with suspicion.
        
Having read the amendmends in the above mentioned notification, I strongly oppose the draft Environment Impact Assessment Notification, 2020, and request you to withdraw the same. This proposed modification of the EIA policy of 2006 is by far the most serious and long lasting blow to protection of the environment.
        
The EIA Policy is framed under the Environmental Protection Act, 1986. Section 3(1) of the Act states that “the Central Government shall have the power to take all such measures as it deems necessary or expedient for the purpose of protecting and improving the quality of the environment and preventing, controlling and abating environmental pollution.” The new EIA policy does nothing of the kind. It purports to impose ‘certain restrictions and prohibition’ on development projects and to make the process of granting environment clearance ‘more transparent and expedient’.
        
However, it is clear that what the amended policy really intends to do is to considerably dilute the existing process of granting environment clearances and to prevent any public scrutiny of the project proponents’ actions. Many of the changes have, in fact, been proposed to circumvent the past decisions of the National Green Tribunal and the Courts. Some of the more serious concerns that the proposed EIA policy has are:
        
    * Grant of post facto approval to projects which may have started, or increased in size, without prior environmental clearance, on payment of a penalty. This makes nonsense of the requirement of prior clearance.
    * Reclassifying projects and activities to put several polluting ones such as thermal power, cement and chemical fertilizer plants into a category (B2) which require minimal scrutiny.
    * Excluding the need for public consultation for a number of projects where such consultation was earlier necessary – this includes all building, construction and area development projects, and anything declared ‘strategic’ by the government.
    * Where such consultation is still necessary, reducing the time available to the public to make objections
    * Specifying that no reports regarding violation of the conditions of environmental clearance will be entertained from anyone other than the project proponent or a government authority.
    * Increased validity of the environment clearance for mining projects and river valley projects from 30 years currently to 50 years and, 10 years currently to 15 years respectively, thus increasing the risk of irreversible environmental, social, and health consequences on account of the project remaining unnoticed for long.
    * Specifying that the industries need provide only an annual environmental compliance report rather than half-yearly reports. Past experiences show that industries have continued to provide data that are false and inaccurate. Seeking an annual report provides an opportunity for the industries to further underestimate any socio-environmental issues arising in their projects.
            
That the government was not really interested in getting responses from the public on the draft EIA Policy 2020, or acting on them, is obvious from the fact that the draft notification was available only in English and Hindi and was only on the Ministry’s website until 30 June, and, despite requests that more time should be given for responses, due to the ongoing pandemic, no heed was paid to such requests. It was only when the Court stepped in that the last date for receiving responses was extended from 30 June to 11 August 2020 and the draft policy was directed to be made available in 22 languages.
        
The model of development the government wishes to follow has little to do with the principles of sustainable development. Development has come to mean a manic frenzy of activity, resulting in the depletion and pollution of rivers and water bodies, ravaging of oceans and coasts, and the wanton cutting down of forests; Local bodies and those whose very survival depend on such forests, oceans, coasts and natural wealth are rarely consulted. This perverse growth has been fuelled by a nexus between governments, both at the Centre and the States, political parties, big corporates and the contracting oligarchs. It is becoming increasingly evident that safeguarding the interests of this nexus is more important than conserving our natural heritage.
        
 Our nation will be a victim of the devastating effects of this twisted and diluted EIA draft, if it comes into act. The right to a clean, green and healthy environment is a part of our Fundamental Rights under Article 21 of the Constitution; and the dilution of regulations, policies and procedures aimed at protecting  the environment contravenes these rights. Protecting the environment is also a part of the Directive Principles of State Policy under Article 48-A and the Fundamental Duties of all citizens under Article 51-A(g).

We urge you to withdraw the proposed EIA Policy 2020 altogether and replace it with a more sensitive policy, which is people and habitat friendly.

Yours Sincerely,`
        
        gmailIcon.href =
            `mailto:eia2020-moefcc@gov.in?subject=Seeking%20withdrawal%20of%20the%20Draft%20Environment%20Impact%20Assessment%20Notification%20-2020&body=${encodeURIComponent(body)}`
    }
)()