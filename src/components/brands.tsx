
import cakes from "../logos/cakes.png"
import hampers from "../logos/hampers.png"
import { motion } from "framer-motion"

const thebrands = [
  {
    name: "Serenity Decor and Events",
    url: cakes,
  },
  {
    name: "Exquisite Bubble Hampers",
    url: hampers,
  },
]

function Brands() {
  return (
    <section className="px-6 py-12">
      {/* Heading */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, x: -55 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="font-serif text-3xl font-bold">
          Brands
        </h1>

        <p className="mt-2 text-muted-foreground">
          These are our brands
        </p>
      </motion.div>

      {/* Brand logos in one grid */}
      <div className="mx-auto grid max-w-4xl grid-cols-2 justify-items-center gap-8">
        {thebrands.map((item) => (
          <motion.div
            key={item.name}
            className="flex w-full flex-col items-center gap-3 rounded-lg p-4 transition-colors hover:bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex h-28 w-full items-center justify-center">
              <img
                src={item.url}
                alt={`${item.name} logo`}
                className="h-24 w-24 object-contain"
              />
            </div>

            <p className="text-center text-sm font-medium">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Brands
