import { Prisma, PrismaClient } from "@prisma/client";
import { json } from "express";
import md5 from "md5";

const prisma = new PrismaClient

export const getAllBarang = async (req, res) => {
    try {
        const result = await prisma.barang.findmany()
        res.json({
            succes: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({ msg: error })
    }
}

export const getBarangbyId = async (req, res) => {
    try{
        const result = await prisma.barang.findUnique({
            where: {
                id_barang: Number(req.params.id)
            }
        })
        res.json({
            succes: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({ msg: error })
    }
}

export const addBarang = async (req, res) => {
    try{
        const {nama_barang, category, location, quantity} = req.body
        const result = await prisma.barang.create({
            data: {
                nama_barang: nama_barang,
                category: category,
                location: location,
                quantity: quantity
            }
        })
        res.json({
            succes: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({ msg: error })
    }
}

export const updateBarang = async (req, res) => {
    try{
        const {nama_barang, category, location, quantity} = req.body
        const result = await prisma.barang.update({
            where:{
                id_barang: Number(req.params.id)
            },
            data:{
                nama_barang: nama_barang,
                category: category,
                location: location,
                quantity: quantity
            }
        })
        res.json({
            succes: true,
            data: result
        })
    } catch (error) {
        console.log(error),
        res.json({ msg: error })
    }
}

export const deleteBarang = async (req, res) => {
    try{
        const result = await prisma.barang.delete({
            where: {
                id_barang: Number(req.params.id)
            }
        })
        res.json({
            succes: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({ msg: error })
    }
}