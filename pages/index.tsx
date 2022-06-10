/**
 * @format
 * @jsxImportSource theme-ui
 */

import type { NextPage } from "next";
import { Box, Link, Text, Flex } from "theme-ui";
import { Meta, Layout, Heading, Story, Register, Heart } from "../components";
import { supabase } from "../lib/utils/supabaseClient";

const Home: NextPage = ({ hearts, supabase }) => {
    return (
        <>
            <Meta
                title="ZK-Elixir"
                description="Learn ZK-SNARK in 60 minutes, for complete beginners."
            />
            <Layout>
                <Heading
                    heading="ZK-Elixir"
                    subHeading="Learn ZK-SNARK in 60 minutes, for complete beginners."
                />

                <Story />
                <Flex
                    sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Heart hearts={hearts} supabase={supabase} />
                    <Register link="" />
                    {/* hack :p */}
                    <div></div>
                </Flex>
            </Layout>
        </>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data, error } = await supabase.from("hearts").select();
    if (error) {
        throw new Error(error.message);
    }
    return {
        props: { hearts: data[0].count },
    };
};
