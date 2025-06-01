<?php
$language = $this->get_current_language();
?>

<div class="jambox-privacy-policy min-h-screen bg-background">
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

    <!-- Privacy Policy Content -->
    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <div class="bg-card border border-gray-800 rounded-xl p-8">
            <h1 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                <?php echo $language === 'en' ? 'Privacy Policy' : 'Politica de Confidențialitate'; ?>
            </h1>

            <div class="prose prose-invert max-w-none">
                <?php if ($language === 'en'): ?>
                    <!-- English Privacy Policy Content -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">CONTACT DETAILS</h2>
                        <p class="text-gray-300 leading-relaxed">The website jambox.top is owned and managed by PRODUSE DIGITALE SRL, VAT ID: 42201514, Trade Registry No.: J40/1385/2020, with registered office at Bulevardul Doina Cornea 4E, 1st floor, Bucharest, Romania (hereinafter referred to as "the Company").</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">DATA COLLECTION</h2>
                        <p class="text-gray-300 leading-relaxed">We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, and other contact information.</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">USE OF DATA</h2>
                        <p class="text-gray-300 leading-relaxed">We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.</p>
                    </section>
                <?php else: ?>
                    <!-- Romanian Privacy Policy Content -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">DATE DE CONTACT</h2>
                        <p class="text-gray-300 leading-relaxed">Site-ul web jambox.top este deținut și administrat de PRODUSE DIGITALE SRL, CUI: 42201514, J40/1385/2020, cu sediul social în Bulevardul Doina Cornea 4E, etaj 1, București, România (denumită în continuare "Compania").</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">COLECTAREA DATELOR</h2>
                        <p class="text-gray-300 leading-relaxed">Colectăm informațiile pe care ni le furnizați direct, cum ar fi atunci când vă creați un cont, utilizați serviciile noastre sau ne contactați. Acestea pot include numele, adresa de email, numărul de telefon și alte informații de contact.</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-foreground">UTILIZAREA DATELOR</h2>
                        <p class="text-gray-300 leading-relaxed">Utilizăm informațiile pe care le colectăm pentru a furniza, menține și îmbunătăți serviciile noastre, pentru a procesa tranzacții, pentru a vă trimite notificări tehnice și mesaje de suport, și pentru a comunica cu dumneavoastră despre produse, servicii și oferte promoționale.</p>
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