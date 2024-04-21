---
title: "How to change font family of certificate in Masteriyo LMS WordPress?"
excerpt: "Customize the font family used in Masteriyo certificates by downloading desired TTF fonts, adding them to your child theme directory, and configuring mPDF in functions.php to reference the new fonts for specific certificate elements."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2023-10-24T05:35:07.322Z"
author:
  name: Ashes Thapa
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
tags:
  - wordpress
  - masteriyo
  - certificate
---

Masteriyo is an easy-to-use WordPress LMS plugin which enables awarding personalized certificates to students upon course completion. By default, DejaVu Sans is applied.

To update the font, download desired TrueType Font files then upload to a `/fonts` folder in your active WordPress child theme.

Utilize Masteriyo's mPDF filter to reference these new fonts when generating certificates. Target specific elements like titles and names by their CSS class to customize fonts.

With just a few lines of code, you have full typography control to tailor professional certificates aligned to your brand and course aesthetic. Recognize achievement with unique, meaningful fonts.

Here is the example of changing font for student name with Ludica Handwriting font:

1. Download the font files you want to use. You can find free fonts on websites like Google Fonts or use your custom font files.
2. Create a directory named 'fonts' in your child theme directory (where your style.css and functions.php files are located).
3. Place the downloaded font files (.ttf and .afm) in the 'fonts' directory.
4. Add the following script in your child theme's functions.php.


```php
add_filter(
	'masteriyo_certificate_builder_mpdf',
	function( $mpdf ) {
		// Specify the font directory relative to the child theme directory.
		$mpdf->AddFontDirectory( __DIR__ . '/fonts' );

		// Define font data for Lucida Handwriting.
		$mpdf->fontdata['lucidahandwriting'] = array(
			'R' => 'LucidaHandwriting.ttf', // This TTF file name should be the same as the TTF file in your 'fonts' directory.
		);

		// Add Lucida Handwriting font to mPDF.
		$mpdf->AddFont( 'lucidahandwriting', 'R' );

		// Define CSS for a specific block with the class 'wp-block-masteriyo-student-name', You can any use other selector to change the font family.
		$css = '.wp-block-masteriyo-student-name {
            font-family: lucidahandwriting;
        }';

		// Make the Lucida Handwriting font available for use in the PDF.
		$mpdf->default_available_fonts[] = 'lucidahandwriting';
		$mpdf->available_unifonts[]      = 'lucidahandwriting';

		// Apply the defined CSS to the PDF.
		$mpdf->WriteHTML( $css, \Mpdf\HTMLParserMode::HEADER_CSS );

		// Return the modified $mpdf object.
		return $mpdf;
	}
);
```
Following the above example you can change the font of any part of the certificate.
