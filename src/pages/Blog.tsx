interface Props { reference: React.RefObject<HTMLElement> }

export default function Blog({ reference }: Props) {
    return (
        <section
            data-sections="Blog"
            ref={reference}>
            <h1 className="text-slate-50">Blog</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem nostrum praesentium harum voluptatum distinctio cupiditate molestias omnis ab hic, aspernatur tenetur iusto vel quia, illo non, eius modi inventore?
                Dignissimos saepe dolore beatae delectus omnis reiciendis perspiciatis architecto consectetur corrupti deserunt, incidunt in non iusto sint, asperiores accusamus vero? Esse alias laudantium tempore aperiam mollitia tempora dicta asperiores? Corrupti.
                Velit libero magnam rerum, at porro vitae id ullam explicabo ipsum amet est praesentium, itaque ratione hic accusantium debitis minus vel eius qui tempora necessitatibus illum mollitia exercitationem! Inventore, alias!
                Cupiditate, commodi beatae quisquam dolores ducimus quibusdam laborum suscipit cumque blanditiis est dolor nostrum vel distinctio! In sunt, architecto, rem consequatur maxime, incidunt a quod iusto cum doloremque provident expedita.
                Nam, ullam saepe! Dolores sunt laboriosam officia culpa nulla exercitationem mollitia dolorum earum iure quidem accusantium eaque beatae, labore tempora necessitatibus accusamus voluptate ex quam quaerat doloremque consequuntur. Praesentium, neque.
                Vel harum fugit repellat cumque nisi aut nesciunt culpa ratione consectetur nemo, id, dolorem odio corrupti et laudantium recusandae dolores mollitia nam. Provident necessitatibus recusandae, perspiciatis optio ipsum architecto praesentium?
                Sapiente voluptatibus consectetur harum aut eum eos sint nulla ratione molestias, quidem aliquid laudantium provident fugit exercitationem iusto cupiditate animi quis vitae quam nihil voluptas impedit ipsa, debitis aperiam? Quam.
                Dignissimos ab, excepturi velit laborum deleniti, iste consequatur consequuntur distinctio officia neque eligendi officiis aut tempora ut mollitia reprehenderit, fugiat provident. Consectetur ut placeat, cupiditate molestias provident tempore dolorum deserunt!
                Rem ipsam, tempore libero tenetur magni accusamus porro optio ipsum hic sapiente voluptatibus. Eos dolorum nobis vitae quae voluptatibus culpa beatae praesentium et quidem, veritatis, rem quia tempora, iusto adipisci.
                Sunt recusandae numquam doloremque aliquam dolorum tenetur quisquam odio, iste fuga quas, ratione quasi error optio nemo hic rem quam eveniet itaque repellat neque in soluta. Quos excepturi a quaerat.
            </p>
        </section>
    )
}
