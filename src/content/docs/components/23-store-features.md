---
title: "مميزات المتجر"
description: "شرح مميزات المتجر في ثيم كارميلا، مع خياراته والصور المتاحة."
editUrl: false
---

من **تخصيص الثيم ← مكوّنات الصفحة الرئيسية**. راجع الخيارات التالية بترتيبها في لوحة المكوّن.

:::caution[ملاحظة على لقطة المصدر]
تظهر بعض الأيقونات كرموز مربعة في الصور المرفقة؛ يمكن الاستدلال على ترتيب العناصر، لكن اللقطة لا توثّق شكل الأيقونات الصحيح.
:::

## معاينة المكوّن

<div class="preview-grid">
<figure data-source-ref="components/23-store-features:desktop"><img src="/carmella-docs/images/23-store-features-desktop.webp" alt="مميزات المتجر — معاينة الكمبيوتر" loading="lazy" decoding="async"/><figcaption>مميزات المتجر — معاينة الكمبيوتر</figcaption></figure>
<figure data-source-ref="components/23-store-features:mobile"><img src="/carmella-docs/images/23-store-features-mobile.webp" alt="مميزات المتجر — معاينة الجوال" loading="lazy" decoding="async"/><figcaption>مميزات المتجر — معاينة الجوال</figcaption></figure>
</div>

[المسافات والعرض والخلفية والحواف: راجع الخيارات المشتركة](/carmella-docs/shared/).

## عنوان القسم (اختياري)

<p class="field-meta"><span><strong>النوع:</strong> نص</span><span><strong>الافتراضي:</strong> فارغ</span></p>

<p><strong>الوظيفة:</strong> يظهر فوق شبكة المميزات عند تعبئته.</p>

<div class="setting-example"><p class="option-label">عنوان القسم (اختياري)</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:0:0:panel"><img src="/carmella-docs/images/23-store-features-section-title-panel.webp" alt="عنوان القسم (اختياري) — عنوان القسم (اختياري) — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>عنوان القسم (اختياري) — عنوان القسم (اختياري) — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>

## العناصر

اسم الحقل في المصدر: <code>items</code>.

<p class="field-meta"><span><strong>النوع:</strong> عناصر متكررة</span><span><strong>الافتراضي:</strong> عناصر جاهزة</span></p>

<p><strong>الوظيفة:</strong> قائمة العناصر التي يعرضها القسم؛ أضف عنصرًا أو احذفه أو اسحبه لتغيير الترتيب.</p>

<div class="setting-example"><p class="option-label">العناصر</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:1:0:panel"><img src="/carmella-docs/images/23-store-features-items-panel.webp" alt="العناصر — العناصر — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>العناصر — العناصر — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>

### حقول كل عنصر

#### الأيقونة

<p class="field-meta"><span><strong>النوع:</strong> أيقونة</span><span><strong>الافتراضي:</strong> sicon-store2</span></p>

<p><strong>الوظيفة:</strong> الأيقونة التي تظهر بجانب العنصر.</p>

#### العنوان

<p class="field-meta"><span><strong>النوع:</strong> نص</span><span><strong>الافتراضي:</strong> فارغ</span></p>

<p><strong>الوظيفة:</strong> العنوان الرئيسي الذي يظهر أعلى القسم. اتركه فارغًا لإخفائه.</p>

#### النص التوضيحي

<p class="field-meta"><span><strong>النوع:</strong> نص</span><span><strong>الافتراضي:</strong> فارغ</span></p>

<p><strong>الوظيفة:</strong> النص المعروض في العنصر.</p>

## عدد الأعمدة

<p class="field-meta"><span><strong>النوع:</strong> قائمة منسدلة</span><span><strong>الافتراضي:</strong> تلقائي (افتراضي)</span></p>

<p><strong>الوظيفة:</strong> تلقائي = عمودان للجوال وثلاثة لسطح المكتب.</p>

<p><strong>الخيارات:</strong> تلقائي (افتراضي) · عمودان · ثلاثة أعمدة · أربعة أعمدة</p>

<div class="setting-example"><p class="option-label">تلقائي (افتراضي) — القيمة الافتراضية.</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:2:0:panel"><img src="/carmella-docs/images/23-store-features-columns-auto-panel.webp" alt="عدد الأعمدة — تلقائي (افتراضي) — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>عدد الأعمدة — تلقائي (افتراضي) — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
<figure data-source-ref="components/23-store-features:2:0:result"><img src="/carmella-docs/images/23-store-features-columns-auto-result.webp" alt="عدد الأعمدة — تلقائي (افتراضي) — معاينة النتيجة" loading="lazy" decoding="async"/><figcaption>عدد الأعمدة — تلقائي (افتراضي) — معاينة النتيجة</figcaption></figure>
</div></div>

<div class="setting-example"><p class="option-label">عمودان</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:2:1:panel"><img src="/carmella-docs/images/23-store-features-columns-2-panel.webp" alt="عدد الأعمدة — عمودان — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>عدد الأعمدة — عمودان — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>

<div class="setting-example"><p class="option-label">ثلاثة أعمدة</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:2:2:panel"><img src="/carmella-docs/images/23-store-features-columns-3-panel.webp" alt="عدد الأعمدة — ثلاثة أعمدة — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>عدد الأعمدة — ثلاثة أعمدة — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>

<div class="setting-example"><p class="option-label">أربعة أعمدة</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:2:3:panel"><img src="/carmella-docs/images/23-store-features-columns-4-panel.webp" alt="عدد الأعمدة — أربعة أعمدة — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>عدد الأعمدة — أربعة أعمدة — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>

## إخفاء النص الفرعي

<p class="field-meta"><span><strong>النوع:</strong> مفتاح</span><span><strong>الافتراضي:</strong> مطفأ</span></p>

<p><strong>الوظيفة:</strong> يعرض الأيقونة وعنوان الميزة فقط.</p>

<div class="setting-example"><p class="option-label">بعد قلب المفتاح</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:3:0:panel"><img src="/carmella-docs/images/23-store-features-hide-text-panel.webp" alt="إخفاء النص الفرعي — بعد قلب المفتاح — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>إخفاء النص الفرعي — بعد قلب المفتاح — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>

## بطاقات بخلفية

<p class="field-meta"><span><strong>النوع:</strong> مفتاح</span><span><strong>الافتراضي:</strong> مطفأ</span></p>

<p><strong>الوظيفة:</strong> كل ميزة داخل بطاقة بحدود وزوايا مدوّرة.</p>

<div class="setting-example"><p class="option-label">بعد قلب المفتاح</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:4:0:panel"><img src="/carmella-docs/images/23-store-features-boxed-panel.webp" alt="بطاقات بخلفية — بعد قلب المفتاح — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>بطاقات بخلفية — بعد قلب المفتاح — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>

## كلاس CSS مخصص

<p class="field-meta"><span><strong>النوع:</strong> نص</span><span><strong>الافتراضي:</strong> فارغ</span></p>

<p><strong>الوظيفة:</strong> للمصممين. كلاس القسم الثابت: cml-s--store-features</p>

<div class="setting-example"><p class="option-label">كلاس CSS مخصص</p><div class="preview-grid">
<figure data-source-ref="components/23-store-features:5:0:panel"><img src="/carmella-docs/images/23-store-features-cml-class-panel.webp" alt="كلاس CSS مخصص — كلاس CSS مخصص — لوحة الإعدادات (تمثيل مطابق للمحرّر)" loading="lazy" decoding="async"/><figcaption>كلاس CSS مخصص — كلاس CSS مخصص — لوحة الإعدادات (تمثيل مطابق للمحرّر)</figcaption></figure>
</div></div>


<div class="source-note">صور لوحات الإعدادات تمثيل مطابق لحقول المحرّر وفق الحزمة، وليست لقطات من المحرّر نفسه. صور النتائج المتاحة لقطات معاينة الثيم. اضغط على الصورة لتكبيرها.</div>
