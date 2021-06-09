import React from 'react'
import './ÇalışanBildirimler.css'

export default function ÇalışanBildirimler() {
    return (
        <div class="bildirimler-alanı">
            <div class="başlık">
                Bildirimleriniz
            </div>
            <div class="elemanlar">
                <div class="eleman">
                    <div class="foto">
                    </div>
                    <div class="açıklama">
                        Berkan şirketinizde çalışmak için başvurdu.
                    </div>
                </div>
                <div class="eleman">
                    <div class="foto">
                    </div>
                    <div class="açıklama">
                        Ali'nin şirketinizde çalışmasının 2.yılı
                    </div>
                </div>
                <div class="eleman">
                    <div class="foto">
                    </div>
                    <div class="açıklama">
                        İş ilanınıza 15 kişi başvurdu.
                    </div>
                </div>
            </div>
        </div>
    )
}
