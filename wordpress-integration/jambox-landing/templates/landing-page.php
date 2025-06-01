<?php
// Get current language
$language = $this->get_current_language();

// Translation function
function jambox_t($key, $lang = 'ro') {
    $translations = array(
        'hero.title' => array(
            'en' => 'The Ultimate Multiplayer Mode for Music',
            'ro' => 'Modul Ultimate Multiplayer pentru Muzică'
        ),
        'hero.subtitle' => array(
            'en' => 'Transform passive playlists into living memories. JamBox brings people together through music, creating unforgettable moments where everyone has a voice.',
            'ro' => 'Transformă playlist-urile pasive în amintiri vii. JamBox unește oamenii prin muzică, creând momente de neuitat unde fiecare are o voce.'
        ),
        'hero.forUsers' => array(
            'en' => 'For Users',
            'ro' => 'Pentru Clienți'
        ),
        'hero.forBusinesses' => array(
            'en' => 'For Venues',
            'ro' => 'Pentru Localuri'
        ),
        'contact.title' => array(
            'en' => 'Have a bar, pub or gym? Let the music bring you clients and revenue!',
            'ro' => 'Ai un bar, pub sau sală de sport? Lasă muzica să îți aducă clienți și venituri!'
        )
        // Add more translations as needed
    );
    
    return isset($translations[$key][$lang]) ? $translations[$key][$lang] : $key;
}
?>

<div class="jambox-landing-page">
    <!-- Hero Section -->
    <section id="hero" class="pt-24 pb-2 md:pt-32 md:pb-24 bg-background text-white relative">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="md:w-1/2 mb-12 md:mb-0">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                        <?php echo jambox_t('hero.title', $language); ?>
                    </h1>
                    <p class="text-xl mb-8 text-white">
                        <?php echo jambox_t('hero.subtitle', $language); ?>
                    </p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                        <a href="#for-users">
                            <button class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                                <?php echo jambox_t('hero.forUsers', $language); ?>
                            </button>
                        </a>
                        <a href="#for-businesses">
                            <button class="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                                <?php echo jambox_t('hero.forBusinesses', $language); ?>
                            </button>
                        </a>
                    </div>
                </div>
                <div class="hidden md:flex md:w-1/2 relative justify-center">
                    <div class="w-full max-w-md relative">
                        <img 
                            src="<?php echo plugin_dir_url(__FILE__) . '../assets/Mobile_vertical-C6yasqJy.png'; ?>" 
                            alt="JamBox Mobile App Screenshot" 
                            class="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- For Users Section -->
    <section id="for-users" class="py-24 bg-background">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    <?php echo $language === 'en' ? 'For Clients' : 'Pentru Clienți'; ?>
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    <?php echo $language === 'en' ? 'Take control of the music and create unforgettable moments with friends.' : 'Preia controlul asupra muzicii și creează momente de neuitat cu prietenii.'; ?>
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- User feature cards would go here -->
                <div class="bg-card border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
                    <div class="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                        <i class="fas fa-map-marker-alt text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-foreground">
                        <?php echo $language === 'en' ? 'Find Venues' : 'Găsește Localuri'; ?>
                    </h3>
                    <p class="text-gray-300">
                        <?php echo $language === 'en' ? 'Discover bars, pubs, and gyms with JamBox near you.' : 'Descoperă baruri, pub-uri și săli de sport cu JamBox lângă tine.'; ?>
                    </p>
                </div>
                
                <div class="bg-card border border-gray-800 rounded-xl p-6 text-center hover:border-secondary/50 transition-all duration-300">
                    <div class="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                        <i class="fas fa-music text-2xl text-secondary"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-foreground">
                        <?php echo $language === 'en' ? 'Queue Your Music' : 'Adaugă Muzică'; ?>
                    </h3>
                    <p class="text-gray-300">
                        <?php echo $language === 'en' ? 'Add your favorite songs to the venue\'s playlist instantly.' : 'Adaugă melodiile tale favorite în playlist-ul localului instant.'; ?>
                    </p>
                </div>
                
                <div class="bg-card border border-gray-800 rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300">
                    <div class="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                        <i class="fas fa-users text-2xl text-accent"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-foreground">
                        <?php echo $language === 'en' ? 'Connect & Share' : 'Conectează-te și Împărtășește'; ?>
                    </h3>
                    <p class="text-gray-300">
                        <?php echo $language === 'en' ? 'Share musical moments and discover new favorites with others.' : 'Împărtășește momente muzicale și descoperă noi favorite cu alții.'; ?>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact-section" class="py-24 bg-gray-900/50">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                        <?php echo jambox_t('contact.title', $language); ?>
                    </h2>
                </div>
                
                <div class="rounded-2xl overflow-hidden shadow-xl bg-card border border-gray-800 p-8">
                    <form id="jambox-contact-form">
                        <div class="mb-4">
                            <label for="name" class="block text-foreground font-medium mb-2">
                                <?php echo $language === 'en' ? 'Name of contact' : 'Nume de contact'; ?>
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                                placeholder="<?php echo $language === 'en' ? 'Your name' : 'Numele tău'; ?>"
                                required
                            />
                        </div>
                        
                        <div class="mb-4">
                            <label for="establishmentName" class="block text-foreground font-medium mb-2">
                                <?php echo $language === 'en' ? 'Name of establishment' : 'Numele localului'; ?>
                            </label>
                            <input 
                                type="text" 
                                id="establishmentName" 
                                name="establishmentName" 
                                class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                                placeholder="<?php echo $language === 'en' ? 'Your establishment name' : 'Numele localului tău'; ?>"
                                required
                            />
                        </div>
                        
                        <div class="mb-4">
                            <label for="establishmentType" class="block text-foreground font-medium mb-2">
                                <?php echo $language === 'en' ? 'Type of establishment' : 'Tipul localului'; ?>
                            </label>
                            <select
                                id="establishmentType"
                                name="establishmentType"
                                class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                required
                            >
                                <option value=""><?php echo $language === 'en' ? 'Please select your establishment...' : 'Te rog selectează tipul localului...'; ?></option>
                                <option value="Pub"><?php echo $language === 'en' ? 'Pub' : 'Pub'; ?></option>
                                <option value="Bar"><?php echo $language === 'en' ? 'Bar' : 'Bar'; ?></option>
                                <option value="Gym"><?php echo $language === 'en' ? 'Gym' : 'Sală de sport'; ?></option>
                                <option value="Other"><?php echo $language === 'en' ? 'Other' : 'Altul'; ?></option>
                            </select>
                        </div>
                        
                        <div class="mb-4">
                            <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                                <div class="md:col-span-2">
                                    <label for="email" class="block text-foreground font-medium mb-2">
                                        <?php echo $language === 'en' ? 'Email' : 'Email'; ?>
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                                        placeholder="<?php echo $language === 'en' ? 'Your email' : 'Email-ul tău'; ?>"
                                        required
                                    />
                                </div>
                                
                                <div class="md:col-span-1 flex items-center justify-center">
                                    <span class="text-gray-400 font-medium"><?php echo $language === 'en' ? 'OR' : 'SAU'; ?></span>
                                </div>
                                
                                <div class="md:col-span-2">
                                    <label for="phone" class="block text-foreground font-medium mb-2">
                                        <?php echo $language === 'en' ? 'Phone Number' : 'Numărul de Telefon'; ?>
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                                        placeholder="+40 123 456 789"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-6">
                            <label for="message" class="block text-foreground font-medium mb-2">
                                <?php echo $language === 'en' ? 'Message' : 'Mesaj'; ?>
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                                placeholder="<?php echo $language === 'en' ? 'Your message' : 'Mesajul tău'; ?>"
                                required
                            ></textarea>
                        </div>
                        
                        <div class="mb-6">
                            <div class="flex items-start space-x-3">
                                <input 
                                    type="checkbox" 
                                    id="gdprConsent" 
                                    name="gdprConsent"
                                    class="mt-1"
                                    required
                                />
                                <div class="flex-1">
                                    <label for="gdprConsent" class="text-sm text-gray-300 leading-relaxed cursor-pointer">
                                        <?php if ($language === 'en'): ?>
                                            I agree to the processing of my personal data in accordance with the <a href="/jambox-privacy" target="_blank" class="text-primary hover:underline">Privacy Policy</a> and <a href="/jambox-terms" target="_blank" class="text-secondary hover:underline">Terms of Service</a>. I understand that my data will be used to respond to my inquiry and for marketing purposes related to JamBox services.
                                        <?php else: ?>
                                            Sunt de acord cu prelucrarea datelor mele personale în conformitate cu <a href="/jambox-privacy" target="_blank" class="text-primary hover:underline">Politica de Confidențialitate</a> și <a href="/jambox-terms" target="_blank" class="text-secondary hover:underline">Termenii și Condițiile</a>. Înțeleg că datele mele vor fi folosite pentru a răspunde la întrebarea mea și în scopuri de marketing legate de serviciile JamBox.
                                        <?php endif; ?>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <button 
                            type="submit" 
                            class="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-medium"
                        >
                            <?php echo $language === 'en' ? 'Send Message' : 'Trimite Mesaj'; ?>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>