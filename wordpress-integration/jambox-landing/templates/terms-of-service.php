<?php
$language = $this->get_current_language();
?>

<div class="jambox-terms-of-service min-h-screen bg-background">
    <!-- Header with navigation -->
    <header class="bg-background border-b border-gray-800 py-4">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <a href="/jambox">
                <div class="flex items-center space-x-3 cursor-pointer">
                    <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">JamBox</span>
                </div>
            </a>
            <a href="/jambox">
                <button class="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded">
                    <?php echo $language === 'en' ? 'Back to Home' : 'Înapoi la Pagina Principală'; ?>
                </button>
            </a>
        </div>
    </header>

    <!-- Terms of Service Content -->
    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <div class="bg-card border border-gray-800 rounded-xl p-8">
            <h1 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                <?php echo $language === 'en' ? 'Terms of Service' : 'Termeni și Condiții'; ?>
            </h1>

            <div class="prose prose-invert max-w-none">
                <?php if ($language === 'en'): ?>
                    <!-- English Terms of Service Content -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">ACCEPTANCE OF TERMS</h2>
                        <p class="text-gray-300 leading-relaxed">By accessing this website and/or any of its pages, you agree to these terms of use. If you do not agree with the terms and conditions, please do not use this website.</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">DESCRIPTION OF SERVICES</h2>
                        <p class="text-gray-300 leading-relaxed">Our website provides the information it contains for general informational purposes only. We make every effort to ensure accuracy at the time of publication but do not guarantee that the information is always up-to-date.</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">RIGHTS TO WEBSITE CONTENT</h2>
                        <p class="text-gray-300 leading-relaxed">The software and digital assets contained within the jambox.top website are the property of PRODUSE DIGITALE SRL, VAT ID: 42201514, Trade Registry No.: J40/1385/2020. All content, products, and applications on this site are owned by JamBox, which reserves the right to modify the site's structure or content at any time without prior notice.</p>
                    </section>
                <?php else: ?>
                    <!-- Romanian Terms of Service Content -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">ACCEPTAREA CONDIȚIILOR</h2>
                        <p class="text-gray-300 leading-relaxed">Prin accesarea acestui site web și/sau a oricărei pagini a acestuia sunteți de acord cu aceste condiții de utilizare. Dacă nu sunteți de acord cu acești termeni și condiții de utilizare, nu accesați acest site.</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">DESCRIEREA SERVICIILOR</h2>
                        <p class="text-gray-300 leading-relaxed">Site-ul nostru vă pune la dispoziție informațiile din acest site web în scop informativ general și nu garantează de exactitatea lor la un moment dat, deși se va încerca pe cât posibil ca la publicarea lor pe site toate informațiile să fie exacte.</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">DREPTURILE ASUPRA CONȚINUTULUI SITE-ULUI</h2>
                        <p class="text-gray-300 leading-relaxed">Proprietarul aplicațiilor software conținute de site-ul web jambox.top este entitatea juridică PRODUSE DIGITALE SRL, CUI: 42201514, J40/1385/2020. Toate informațiile, produsele sau aplicațiile conținute în acest site sunt proprietatea JamBox, care își rezervă dreptul de a modifica conținutul și/sau structura site-ului în orice moment și fără nicio informare prealabilă.</p>
                    </section>
                <?php endif; ?>
            </div>

            <!-- Back to home button at the bottom -->
            <div class="text-center mt-12 pt-8 border-t border-gray-800">
                <a href="/jambox">
                    <button class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                        <?php echo $language === 'en' ? 'Back to Home' : 'Înapoi la Pagina Principală'; ?>
                    </button>
                </a>
            </div>
        </div>
    </main>
</div>