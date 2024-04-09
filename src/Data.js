const Data = [
    // type 1 = zakaut, type 2 = hatava
{id: 1, type: 1, name: 'החזר אובדן ימי עבודה למלווה באשפוז או שיקום', amount: null,
text: "לבני המשפחה המלווים את הפצוע יש אופציה לקבל החזר על ימי העבודה אותם הפסידו בתקופת האשפוז. הסכום הראשוני עומד על שכר המנימום – 5,571 ₪, אם הרוויחו יותר ניתן להגיש באופן יזום בקשה להשלמה. ההשלמה עד לסכום מקסימלי של 49,030 ₪."},
{id: 2, type: 1, name: 'הוצאות בגין אשפוז- מענק חודשי', amount: 2635,
text: "המענק מועבר אוטומטית לחשבון הפצוע, עד כשבועיים לאחר תחילת האשפוז (גם אם שוחרר מאשפוז). המענק יועבר אוטומטית בתחילת כל חודש אשפוז נוסף כל עוד האשפוז נמשך. (יועבר ביום האשפוז ה-1, ה- 31, 61 וכו. לא בתחילת חודש קלנדרי)."},
{id: 3, type: 1, name: 'הוצאות בגין אשפוז- מענק חודשי', amount: 5270,
text: "המענק מועבר אוטומטית לחשבון הפצוע, עד כשבועיים לאחר תחילת האשפוז (גם אם שוחרר מאשפוז). המענק יועבר אוטומטית בתחילת כל חודש אשפוז נוסף כל עוד האשפוז נמשך. (יועבר ביום האשפוז ה-1, ה- 31, 61 וכו. לא בתחילת חודש קלנדרי)."},
{id: 4, type: 1, name: 'הוצאות נסיעה וכלכלה חודשיות', amount: {},
text: `מענק חודשי ע""ס 11,570 ש""ח שישולם לחשבון המשפחה הגרעינית בשתי פעימות - מקדמה והמשך המענק בתום האשפוז / בתום 30 ימי אשפוז. המקדמה  בסך 3,000 ש""ח תועבר לחשבון המשפחה בתחילת כל חודש אשפוז כל עוד הפצוע מאושפז (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה,1- ,31 61 וכו). במידה ויושלם חודש אשפוז המשפחה תקבל את ההפרש וההשלמה ל 11,570 ₪ (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה,30- ,60 90 וכו). במידה והפצוע לא השלים חודש אישפוז ישולם סכום המענק לפי 380 ש""ח ליום אשפוז בניכוי המקדמה. פצוע ששוחרר לאחר מס' ימים לא ידרש להחזיר את המקדמה.`},
{id: 5, type: 1, name: 'הוצאות נסיעה וכלכלה חודשיות', amount: {},
text: `מענק חודשי ע""ס 11,570 ש""ח שישולם לחשבון המשפחה הגרעינית בשתי פעימות - מקדמה והמשך המענק בתום האשפוז / בתום 30 ימי אשפוז. המקדמה  בסך 6,000 ש""ח תועבר לחשבון המשפחה בתחילת כל חודש אשפוז כל עוד הפצוע מאושפז (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה,1- ,31 61 וכו). במידה ויושלם חודש אשפוז המשפחה תקבל את ההפרש וההשלמה ל 11,570 ₪ (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה,30- ,60 90 וכו). במידה והפצוע לא השלים חודש אישפוז ישולם סכום המענק לפי 380 ש""ח ליום אשפוז בניכוי המקדמה. פצוע ששוחרר לאחר מס' ימים לא ידרש להחזיר את המקדמה.`},
{id: 6, type: 1, name: 'כרטיס גודיס', amount: 500,
text: "כרטיס גודיס אישי המוטען ב- 500 ₪ כל שבוע ומשויך שמית לפצוע שנמצא באשפוז. הסכום אינו נצבר לשבוע שלאחר מכן. במידה וזמן האשפוז היה קצר והחייל שוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית. כאשר הפצוע משתחרר- הכרטיס נחסם, אין צורך להזדכות עליו."},
{id: 7, type: 1, name: 'כרטיס גודיס', amount: 500,
text: "כרטיס גודיס אישי המוטען ב- 500 ₪ כל שבוע ומשויך שמית לפצוע שנמצא באשפוז. הסכום אינו נצבר לשבוע שלאחר מכן. במידה וזמן האשפוז היה קצר והחייל שוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית. כאשר הפצוע משתחרר- הכרטיס נחסם, אין צורך להזדכות עליו."},
{id: 8, type: 1, name: 'מענק אשפוז חד פעמי', amount: 1800,
text: "המענק יועבר אוטומטית לחשבון הפצוע בתקופת האשפוז הראשונה, עד כשבועיים לאחר תחילת האשפוז. המענק ישולם גם במידה והפצוע שוחרר מאשפוז."},
{id: 9, type: 1, name: 'תווי סיוע כלכלי ע"ס 5,000 ₪', amount: 5000,
text: "תווי סיוע כלכלי בסך 5,000 ₪. ניתן בעת האשפוז בלבד. במידה וזמן האשפוז של החייל היה קצר ושוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית."},
{id: 10, type: 1, name: 'תווי סיוע כלכלי ע"ס 1,000 ₪', amount: 1000,
text: "תווי סיוע כלכלי בסך 1,000 ₪. ניתן בעת האשפוז בלבד. במידה וזמן האשפוז של החייל היה קצר ושוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית."},
{id: 11, type: 1, name: 'תווי סיוע כלכלי ע"ס 5,000 ₪', amount: 5000,
text: "תווי סיוע כלכלי בסך 5,000 ₪. ניתן בעת האשפוז בלבד. במידה וזמן האשפוז של החייל היה קצר ושוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית."},

{id: 12, type: 2, name: 'אובדן ציוד אישי/ צבאי', amount: null,
text: 'במידה ויש צורך בהחזר עבור אובדן ציוד אישי/ צבאי ניתן לפנות לקצינת הנפגעים'},
{id: 13, type: 2, name: 'תעודות', amount: null,
text: `במידה ויש צורך להפיק מחדש תעודות כמו: תעודת שחרור בכבוד, תעודת לוחם, תעודת חוגר, תעודת משרת מילואים פעיל וכו' יש לפנות לקצינת הנפגעים`},
{id: 14, type: 2, name: 'סיוע כלכלי', amount: null,
text: `במידה ויש צורך בסיוע כלכלי נוסף ניתן לפנות לקצינת הנפגעים`},
{id: 15, type: 2, name: 'סיוע כלכלי', amount: null,
text: `במידה ויש צורך בסיוע כלכלי נוסף ניתן לפנות לקצינת הנפגעים או לקרן הסיוע לחיילי מילואים בכתובת ....`},
{id: 16, type: 2, name: 'הלנה', amount: null,
text: `במידה ויש צורך בסיוע בהלנה למלווים ניתן לפנות לנציגי רמ2`},
{id: 17, type: 2, name: 'טיפול נפשי לפצוע ו/או לבני משפחתו', amount: null,
text: `במידה ויש צורך בטיפול נפשי לפצוע או לבני משפחה ניתן לפנות לקצינת הנפגעים. השירות יינתן לקרבה ראשונה בלבד, לאחים מעל גיל 7, המענה יינתן בצורה פרונטלית/ מפגשי זום במפגש אישי. לא ניתן לקיים מפגשים משפחתיים/ זוגיים.`},
{id: 18, type: 2, name: 'החזרים על הוצאות', amount: null,
text: `במידה וישנן הוצאות ששולמו מכספו של החייל / המשפחה כגון טלפון שניזוק ותוקן, נסיעות של המשפחה במונית לבית החולים, פריטים נחוצים לאשפוז (רכישת נעליים לשיקום, מתקנים מותאמים למיטה וכו'), ניתן להגיש בקשה להחזרים דרך קצינת הנפגעים. לא כולל החזר על משקפי ראייה לחיילי חובה.`},
{id: 19, type: 2, name: 'טיפולים רפואיים, טיפול נפשי לפצוע ו/או לבני משפחה, ציוד רפואי - לפצועים, התאמות דיור', amount: null,
text: `ישנן זכאויות נוספות במעטפת השיקום האישית הניתנת ע"י משהב"ט, לבירור ניתן לפנות לעובדת השיקום המלווה או לאיזור האישי באתר משהב"ט`},
];

export default Data;
