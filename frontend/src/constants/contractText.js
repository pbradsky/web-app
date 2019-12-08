const PREAMBLE = `\
AGREEMENT FOR DEMONSTRATION USE OF VEHICLE

In consideration of the agreements contained herein, Dealer hereby permits Operator to possess and use the motor behicle descibed herein upon the terms and conditions set forth on both sides of this agreement.

1.	Dealer and Operator expressly agree that for the term of this agreement Operator is not and does not become an agent, servant, or employee of Dealer in any manner whatsoever.
2.	Operator acknowledges that the vehicle is the rightful property of Dealer although registered title may be in some third party, and further acknowledges that he received said vehicle in good and safe mechanical condition and agrees that he will return said vehicle to Dealer at Dealer’s address herein the same condition as he received it, ordinary wear and tear excepted, on the return date stated or sooner upon demand of Dealer. In states where the law is so applicable, Operator acknowledges that failure to promptly return the vehicle may result in criminal prosecution after notification pursuant to said laws.
3.	Operator agrees that the vehicle will not be operated in violation of any law governing the use or return thereof, or in violation of any of the other terms and conditions set forth above.
4.	Operator agrees that he will not operate the vehicle outside the state of Washington.
5.	Operator expressly agrees that the motor vehicle given to him shall not be operated:
a.	To carry passengers for a consideration, express or implied, or in connection with the Operator’s employment;
b.	In violation of any terms and conditions of this agreement;
c.	In any race or speed test or contest;
d.	To propel or tow any trailer or vehicle used as a trailer;
e.	By any person under the influence of intoxicants or narcotics;
f.	By any person with a suspended or revoked or invalid driver’s license;
g.	For any illegal purpose;
h.	By any minor or anyone other than the Operator.
6.	The Dealer is not providing insurance of any nature or kind including but not limited to collision or public liability insurance. Operator must have his own insurance in order to be protected.
7.	Operator agrees to replace gasoline used if the vehicle is driven over 50 miles.

DEALER’S PERMIT FOR DEMONSTRATION
`;

const CONTRACT_FORM = (name, address, phone, license) => `\
Operator:

Name: ${name}
Address: ${address}
Phone Number: ${phone}
Operator License Number: ${license}

Proof of Insurance: [upload]
Picture of Driver’s License (front): [upload]
Picture of Driver’s License (back): [upload]
`;

const SIGNATURE = `\
IMPORTANT: READ BEFORE SIGNING

The above named operator is authorized to drive the described vehicle for the purpose of purchase during the period indicated below. This permit is subject to inspection by all law enforcement officers when the vehicle is being operated for demonstration.

The undersigned Operator acknowledges that the dealer is not providing any type of insurance protection, including but not liimited to public liability or collision insurance, and is not collecting any charge therefor. The undersigned further acknowledges that the air bag(s) may have been deactivated or an air bag on/off switch may have been installed on this vehicle, that the dealer assumes no responsibility or liability for any such deactivation or installation, and that the dealer is not warranting the operability or reliability of any such air bag deactivation on/off switch.

In consideration of the foregoing and permission to use the vehicle, the undersigned Operator hereby waives any claim or cause of action against dealer resulting from the undersigned’s operation of the described vehicle, and agrees to pay for all loss and damage to the vehicle. The undersigned Operator further agrees to fully indemnify, protect, defend, and hold dealer harmless from any and all damages and liability, irrespective of fault, resulting in any way from Operator’s use of the vehicle.
`;

const SIGNATURE_FORM = `\
Operator’s Signature: [input]
Vehicle: [data upon selection]
Dealer:
Name: Klein Honda
Address: 10611 Evergreen Way Everett, WA 98204
Dealer’s Signature: #0335
Dealer Number: 425-355-7500
Date: [todays date]
`;

export { PREAMBLE, CONTRACT_FORM, SIGNATURE, SIGNATURE_FORM };